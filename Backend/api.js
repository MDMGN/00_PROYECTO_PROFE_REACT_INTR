import express from "express";
import process from "node:process";

const app = express();
const port = process.env.PORT;

const temarios = [{ id: 1, title: "Introducción a NodeJS" }];

//CRUD
app.get("/temarios", (req, res) => {
  res.json(temarios);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
