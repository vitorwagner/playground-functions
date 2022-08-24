// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
// Referência: Desigualdade triangular https://pt.wikipedia.org/wiki/Desigualdade_triangular
function triangleCheck(lineA, lineB, lineC) {
  if (lineA >= lineB + lineC || lineB >= lineA + lineC || lineC >= lineA + lineB) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
