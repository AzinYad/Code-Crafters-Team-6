import { Router } from "express";

import logger from "./utils/logger";

import db from "./db";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});


router.get("/energizers", async (req, res) => {
	const sortBy = req.query.sort_by; // get the sort_by parameter from the query string

	let query = `
    SELECT energizers.id, energizers.name, energizers.description, ROUND(AVG(energizer_ratings.rating), 1) AS rating
    FROM energizers
    LEFT JOIN energizer_ratings ON energizers.id = energizer_ratings.energizer_id
    GROUP BY energizers.id
  `;

	if (sortBy === "desc") { // if sort_by parameter is "desc", sort by descending order of rating
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
	const { name, description } = req.body;

	if (!name || !description) {
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
		const result = await db.query(query, [name, description]);
		res.json(result.rows[0]);
	} catch (error) {
		logger.error(error);
		res.status(500).send("Internal server error");
	}
});

export default router;
