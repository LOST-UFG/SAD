const express = require("express");
const routes = require("./src/routes");
const http = require("http");
const app = express();
const server = http.Server(app);

app.use(express.json());

app.use(routes);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3333;
}

server.listen(port, function () {
  console.log(`Server started Successfully on port ${port}`);
});
