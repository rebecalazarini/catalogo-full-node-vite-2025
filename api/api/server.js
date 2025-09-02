const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
const routes = require("../src/routes");

app.use("/", routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
