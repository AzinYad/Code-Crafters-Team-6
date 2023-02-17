import http from "http";
import { Pool } from "pg";

import app from "./app";
import { connectDb, disconnectDb } from "./db";
import config from "./utils/config";
import logger from "./utils/logger";

//import db from "./db";

const server = http.createServer(app);

server.on("listening", () => {
	const addr = server.address();
	const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
	logger.info("listening on: %s", bind);
});

process.on("SIGTERM", () => server.close(() => disconnectDb()));




app.get("/hello", (req, res) => {
	res.json({ message: "Hello World" });
});

// app.post("/", (req, res) => {
// 	const insertQ = "INSERT INTO energizers(name,energizer) VALUES($1,$2)";
// 	db.query(insertQ, [req.name, req.energizer]).then(() => {
// 		res.status(201).json({ message: "table updated" });
// 	});
// });

connectDb().then(() => server.listen(config.port));
