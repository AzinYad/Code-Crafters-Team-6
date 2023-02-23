import { Router } from "express";
// import { Pool } from "pg";
import db from "./db";
import logger from "./utils/logger";


const router = Router();

// router.get("/", (_, res) => {
// 	logger.debug("Welcoming everyone...");
// 	res.json({ message: "Hello, world!" });
// });

router.get("/energizers", async (req, res) => {
	try {
		const result = await db.query("SELECT * FROM energizers");
		res.json(result.rows);
	} catch (error) {
		logger.error(error);
		res.status(500).json(error);
	}
});

router.post("/energizers", async (req, res) => {
	const { name, description } = req.body;

	if (!name || !description) {
		return res.status(400).json({ error: "Missing required fields" });
	}

	try {
		await db.query(
			"INSERT INTO energizers( name, description) VALUES ( $1, $2)",
			[ name, description]
		);
		const result = await db.query("SELECT * FROM energizers");
		res.status(200).send(result.rows);
	} catch (error) {
		logger.error(error);
		res.status(500).json({ error: "Failed to create energizer" });
	}
});



//   router.post('/energizer-ratings', async (req, res) => {
//     const { energizer_id, rating } = req.body;
//    try{
//     await db.query('energizer_ratings').insert({ energizer_id, rating });
//     res.send('Energizer rating created');
// }
//   });

export default router;
