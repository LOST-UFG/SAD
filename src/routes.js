const express = require("express");
const fs = require("fs");
const util = require("util");

const { Router } = require("express");

const routes = express.Router();

const readFile = util.promisify(fs.readFile);

// Endpoints
routes.get("/login", async (request, response) => {
  fs.readFile("./src/view/Login/index.html", (error, html) => {
    response.end(html);
  });
});

module.exports = routes;
