const Docente = require("./../../repository/Docente");
module.exports = class Login {
  user = null;

  async validarLogin(email, senha) {
    this.user = new Docente();

    return await this.user.validarLogin(email, senha);
  }
};
