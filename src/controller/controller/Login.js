const LoginDomain = require("./../../model/domain/Login");

module.exports = class Login {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
    this.loginDomain = new LoginDomain(email, senha);
  }
};
