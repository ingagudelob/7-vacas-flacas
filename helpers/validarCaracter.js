const esLetra = (caracter) => {
  let ascii = caracter.toUpperCase().charCodeAt(0);
  return ascii > 64 && ascii < 91;
};

module.exports = esLetra;
