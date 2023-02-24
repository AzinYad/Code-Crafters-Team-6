import { Router } from "express";

import logger from "./utils/logger";
import db from "./db";
const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/energisers", async (_, res) => {
	const query = `SELECT energizers.*, energizer_ratings.rating, energizer_ratings.id AS rating_id
FROM energizers
LEFT JOIN energizer_ratings ON energizers.id = energizer_ratings.energizer_id`;
	try {
		const result = await db.query(query);
		res.json(result.rows);
	} catch (error) {
		res.status(500).send(error);
	}
});

router.get("/energiser-detail/:id", async (req, res) => {
	const id = req.params.id;
	const query = "SELECT energizers.*, energizer_ratings.rating FROM energizers LEFT JOIN energizer_ratings ON energizers.id = energizer_ratings.energizer_id WHERE energizers.id = $1";
	try {
		const result = await db.query(query, [id]);
		if (result.rowCount === 0) {
			res.status(404).send("Energiser not found");
		} else {
			res.json(result.rows[0]);
		}
	} catch (error) {
		res.status(500).send(error);
	}
});



export default router;
