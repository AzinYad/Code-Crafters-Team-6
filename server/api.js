import { Router } from "express";

import logger from "./utils/logger";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/", (req, res) => {
	logger.debug("Welcoming everyone");
	res.json({ message: "What is this" });
});

export default router;
