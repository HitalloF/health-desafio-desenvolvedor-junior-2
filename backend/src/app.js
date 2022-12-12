const express = require("express")
const app = express();
const Router = require('./routes/Routes')

const bodyParser = require("body-parser");
app.use(bodyParser.json());

require('./database') // iniciando database

app.use(Router)







app.listen(3000)