import { Router } from "express";

import logger from "./utils/logger";

const router = Router();

router.get("/energiser", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, trainees!" });
});











export default router;