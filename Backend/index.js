const express = require("express");

const PORT = 3000;

const app = express();

app.get("", () => {
  console.log("Hola desde express");
});

app.listen(PORT);
