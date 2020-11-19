const LoginDomain = require("./../../model/domain/Login");

module.exports = class Login {
  loginDomain = null;
  email = "";
  senha = "";

  constructor(email, senha) {
    this.email = email;
    this.senha = senha;

    this.loginDomain = new LoginDomain();
  }

  async validarLogin() {
    return await this.loginDomain.validarLogin(this.email, this.senha);
  }
};
