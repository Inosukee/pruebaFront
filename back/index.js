require("dotenv").config();
const express = require('express');
const app = express();
const path = require('path')
const port = process.env.PORT
const _dirname = path.resolve();

app.use(express.static(path.join(_dirname, "/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(_dirname, "dist/index.html"));
});

app.listen(port, () => {
  console.log(`iniciando en el puerto ${port}`);
});