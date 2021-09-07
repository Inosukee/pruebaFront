require("dotenv").config();
const express = require('express');
const app = express();
const path = require('path')
const port = process.env.PORT
const _dirname = path.resolve();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();
const routes = require('./routes/router');

app.use(express.static(path.join(_dirname, "/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(_dirname, "dist/index.html"));
});

app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/api", router);
routes(router);

app.listen(port, () => {
  console.log(`iniciando en el puerto ${port}`);
});