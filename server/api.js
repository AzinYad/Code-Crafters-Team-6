import { Router } from "express";

import logger from "./utils/logger";

import db from "./db";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/energizers", async (_, res) => {
	logger.debug("Welcoming everyone...");
	const query = "select * from energizers";
	try {
		const result = await db.query(query);
		res.json(result.rows);
	} catch (error) {
		res.status(500).send(error);
	}
});

router.post("/energizers", (req, res) => {
	let name = req.query.name;
	let description = req.query.description;

	const insertQuery = "INSERT INTO energizers(name, description) VALUES($1, $2)";
	db.query(insertQuery, [name, description])
		.then(() => {
			res
				.status(201)
				.json({ message: "The energizer was succesfully uploaded" });
		})
		.catch((error) => {
			res.status(500).send(error);
		});
});

export default router;
