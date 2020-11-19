const express = require("express");
const fs = require("fs");
const util = require("util");
const { Router } = require("express");
const routes = express.Router();
const readFile = util.promisify(fs.readFile);

const Docente = require("./model/viewentities/Docente");

//SESSAO
var sess = null;

//Controllers
const LoginController = require("./controller/controller/Login");

// Endpoints
routes.get("/", async (request, response) => {
  sess = request.session;

  if (!sess.user) {
    fs.readFile("./src/view/Login/index.html", (error, html) => {
      response.end(html);
    });
  } else {
    console.log("zzzz");
    response.end();
  }
});

routes.get("/login", async (request, response) => {
  sess = request.session;

  fs.readFile("./src/view/Login/index.html", (error, html) => {
    response.end(html);
  });
});

routes.post("/auth", async (request, response) => {
  const { email, password } = request.body;
  sess = request.session;

  loginController = new LoginController(email, password);
  const result = await loginController.validarLogin();

  if (result instanceof Docente) {
    sess.user = result;
  } else {
    response.redirect("/login");
    //response.send(alert(result.error.errorMessage));
    response.end();
  }

  if (sess.user) {
    response.redirect("/search");
  } else {
    response.end();
  }
});

routes.get("/search", async (request, response) => {
  sess = request.session;

  if (sess.user) {
    fs.readFile("./src/view/BuscarDocente/index.html", (error, html) => {
      response.end(html);
    });
  }
});

module.exports = routes;
