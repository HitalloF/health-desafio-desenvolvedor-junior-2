const express = require("express")
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

require('./src/database') // iniciando database









app.listen(3000)