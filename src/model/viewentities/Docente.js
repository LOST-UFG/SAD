module.exports = class Docente {
  Codigo_Docente = null;
  Email = "";
  Nome = "";
  Sobrenome = "";
  Senha = "";
  Ano_Entrada = null;
  Ano_Saida = null;

  constructor(
    Codigo_Docente,
    Email,
    Nome,
    Sobrenome,
    Senha,
    Ano_Entrada,
    Ano_Saida
  ) {
    this.Codigo_Docente = Codigo_Docente;
    this.Email = Email;
    this.Nome = Nome;
    this.Sobrenome = Sobrenome;
    this.Senha = Senha;
    this.Ano_Entrada = Ano_Entrada;
    this.Ano_Saida = Ano_Saida;
  }
};
