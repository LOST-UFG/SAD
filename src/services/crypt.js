const bcrypt = require("bcrypt");

async function comparar(senha, hash) {
  const result = await bcrypt.compare(senha, hash);

  return result;
}

async function encriptar(senha) {
  const hash = await bcrypt.hash(senha, 10);

  return hash;
}

module.exports = {
  comparar,
  encriptar,
};
