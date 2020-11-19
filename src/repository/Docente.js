const crypt = require("./../services/crypt");
const connection = require("./dbConnection");
const ModelDocente = require("./../model/viewentities/Docente");

module.exports = class Docente {
  async validarLogin(email, senha) {
    try {
      const pool = await connection();

      const promisePool = pool.promise();

      let [rows] = await promisePool.query(
        `SELECT Senha FROM Docente WHERE Email = "${email}" limit 1`
      );

      let hashDocente = null;

      if (rows[0].Senha) {
        hashDocente = rows[0].Senha;
      } else {
        return {
          error: {
            errorCode: 404,
            errorMessage:
              "Usuário não encontrado. Verifique suas informações e tente novamente.",
          },
        };
      }

      const login = await crypt.comparar(senha, hashDocente);

      [rows] = await promisePool.query(
        `SELECT * FROM Docente WHERE Email = "${email}" AND Senha = "${hashDocente}"  limit 1`
      );

      const docenteBD = rows[0];

      if (login === true) {
        return new ModelDocente(
          docenteBD.Codigo_Docente,
          docenteBD.Email,
          docenteBD.Nome,
          docenteBD.Sobrenome,
          docenteBD.Senha,
          docenteBD.Ano_Entrada,
          docenteBD.Ano_Saida
        );
      } else {
        return {
          error: {
            errorCode: 500,
            errorMessage: "Erro ao encontrar usuário. Tente novamente",
          },
        };
      }
    } catch (err) {
      return {
        error: {
          errorCode: 500,
          errorMessage: "Usuário não encontrado. Tente novamente.",
        },
      };
    }
  }
};
