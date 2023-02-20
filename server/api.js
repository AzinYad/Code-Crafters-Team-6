import { Router } from "express";
import energiserRouter from "./energiser";
// import logger from "./utils/logger";

const router = Router();

// router.get("/", (_, res) => {
// 	logger.debug("Welcoming everyone...");
// 	res.json({ message: "Hello, world!" });
// });

router.use(energiserRouter);

export default router;
