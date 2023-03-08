import { Router } from "express";

import logger from "./utils/logger";

import db from "./db";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});


router.get("/energizers", async (req, res) => {
	const sortBy = req.query.sort_by;

	let query = `
    SELECT energizers.id, energizers.name, energizers.description, energizers.submission_date, ROUND(AVG(energizer_ratings.rating), 1) AS rating
    FROM energizers
    LEFT JOIN energizer_ratings ON energizers.id = energizer_ratings.energizer_id
    GROUP BY energizers.id
  `;

	if (sortBy === "recent") {
		query += `
      ORDER BY energizers.submission_date DESC
    `;
	} else if (sortBy === "rating") {
		query += `
      ORDER BY rating DESC
    `;
	}

	try {
		const result = await db.query(query);
		res.json(result.rows);
	} catch (error) {
		logger.error(error);
		res.status(500).send("Internal server error");
	}
});


router.get("/energizers/:id", async (req, res) => {
	const id = req.params.id;
	try {
		const result = await db.query("SELECT * FROM energizers WHERE id=$1", [id]);
		if (result.rowCount === 0) {
			res.status(404).send("Energizer not found");
		} else {
			const row = result.rows[0];
			const energizer = {
				"id": row.id,
				"name": row.name,
				"description": row.description,
				"submission_date": row["submission_date"],
				"ratings": [],
				"average_rate": 0,
			};
			const result2 = await db.query("SELECT * FROM energizer_ratings WHERE energizer_id=$1", [row.id]);
			energizer.ratings = result2.rows.map((row) => parseInt(row.rating));
			energizer.average_rate = (() => {
				const sum = energizer.ratings.reduce((acc, curr) => acc + curr, 0);
				const avg = (sum / energizer.ratings.length).toFixed(1);
				return avg;
			})();
			res.json(energizer);
		}
	} catch (error) {
		logger.error(error);
		res.status(500).send("Internal server error");
	}
});

router.post("/energizers", async (req, res) => {
	const { name, description, rating } = req.body;

	if (!name || !description || !rating) {
		return res.status(400).json({ error: "Missing required fields" });
	}
	if (name.length > 50) {
		return res
			.status(400)
			.json({ error: "Name has to be less or equal to 50 characters" });
	}
	const query = `
	  INSERT INTO energizers (name, description) 
	  VALUES ($1, $2)
	  RETURNING id, name, description
	`;
	try {
		// Insert energizer into energizers table
		const result = await db.query(query, [name, description]);

		// Insert rating into Energizer_ratings table
		const ratingQuery = `
		  INSERT INTO Energizer_ratings (energizer_id, rating) 
		  VALUES ($1, $2)
		  RETURNING id, energizer_id, rating
		`;

		const ratingResult = await db.query(ratingQuery, [result.rows[0].id, rating,
		]);

		res.json({ energizer: result.rows[0], rating: ratingResult.rows[0] });
	} catch (error) {
		logger.error(error);
		res.status(500).send("Internal server error");
	}
});


router.delete("/energizers/:id", async (req, res) => {
    const id = req.params.id;
    try {
	await db.query("DELETE FROM energizer_ratings WHERE energizer_id=$1", [id]);
	const result = await db.query("DELETE FROM energizers WHERE id=$1", [id]);

      if (result.rowCount === 0) {
        res.status(404).send("Energizer not found");
      } else {
        res.status(204).json({ message: "Energizer deleted successfully" });
      }
    } catch (error) {
      logger.error(error);
      res.status(500).send("Internal server error");
    }
  });

export default router;
