const express = require("express");
require("dotenv").config();
const session = require("express-session");
const bodyParser = require("body-parser");
const routes = require("./src/routes");
const app = express();

app.use(session({ secret: "ssssssh" }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3333;
}

app.listen(port, function () {
  console.log(`Server started Successfully on port ${port}`);
});
