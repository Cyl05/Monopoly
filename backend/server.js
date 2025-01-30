import express from "express";
import env from "dotenv";

env.config();
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello")
});

app.listen(port, () => {
    console.log("Server started at http://localhost:3000");
});