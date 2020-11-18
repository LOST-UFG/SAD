const Docente = require("./../../repository/Docente");
module.exports = class Login {
  user = null;

  validarLogin(email, senha) {
    this.user = new Docente();

    this.user.validarLogin(email, senha);
  }
};
