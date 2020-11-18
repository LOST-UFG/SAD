const LoginDomain = require("./../../model/domain/Login");

module.exports = class Login {
  loginDomain = null;
  email = "";
  senha = "";

  constructor(email, senha) {
    this.email = email;
    this.senha = senha;

    this.loginDomain = new LoginDomain();

    this.loginDomain.validarLogin(email, senha);
  }
};
