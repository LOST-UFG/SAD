const Docente = require("./../entities/Docente");
module.exports = class Login {
  user = null;

  validarLogin(email, senha) {
    this.user = new Docente();

    this.user.auth(email, senha);
  }
};
