const express = require("express");
const fs = require("fs");
const util = require("util");
const { Router } = require("express");
const routes = express.Router();
const readFile = util.promisify(fs.readFile);

//Controllers
const LoginController = require("./controller/controller/Login");

// Endpoints
routes.get("/login", async (request, response) => {
  fs.readFile("./src/view/Login/index.html", (error, html) => {
    response.end(html);
  });
});

routes.post("/auth", async (request, response) => {
  const { email, password } = request.body;

  loginController = new LoginController(email, password);

  fs.readFile("./src/view/Login/index.html", (error, html) => {
    response.end(html);
  });
});

module.exports = routes;
