import { Router } from "express";

import logger from "./utils/logger";

import db from "./db";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

// I have edited this code so I could have access to ratings
router.get("/energizers", async (_, res) => {
	const query = `
SELECT energizers.id, energizers.name, energizers.description, ROUND(AVG(energizer_ratings.rating), 1)  AS rating
	FROM  energizers 
	LEFT JOIN energizer_ratings ON energizers.id = energizer_ratings.energizer_id GROUP BY energizers.id`;
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
				"ratings": [],
			};
			const result2 = await db.query("SELECT * FROM energizer_ratings WHERE energizer_id=$1", [row.id]);
			energizer.ratings = result2.rows.map((row) => parseInt(row.rating));
			res.json(energizer);
		}
	} catch (error) {
		logger.error(error);
		res.status(500).send("Internal server error");
	}
});

//I have only created this POST endpoint to update my database, its very incomplete as it lacks any validation, but it works and can be used as a base


router.post("/energizers", async (req, res) => {
	const { name, description } = req.body;

	if (!name || !description) {
		return res.status(400).json({ error: "Missing required fields" });
	}

	try {
		await db.query(
			"INSERT INTO energizers( name, description) VALUES ($1, $2)",
			[ name, description]
		);
		const result = await db.query("SELECT * FROM energizers");
		res.status(201).send(result.rows);
	} catch (error) {
		logger.error(error);
		res.status(500).json({ error: "Failed to create energiser" });
	}
});





export default router;
