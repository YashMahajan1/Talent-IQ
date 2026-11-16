import express from "express";
import { env } from "./lib/env.js";

const app = express();

console.log(env.db_url);

app.get("/health", (req, res) => {
    res.status(200).json({ msg: "api is runing successfully"});
});

app.listen(env.Port, () => {
    console.log(`Server running on port ${env.Port}`);
});