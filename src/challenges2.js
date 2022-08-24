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
// Referência: https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript
function hydrate(drinks) {
  let numbersOfDrinks = drinks.match(/[+-]?\d+(?:\.\d+)?/g).map(Number);
  let water = 0;
  for (let number of numbersOfDrinks) {
    water += number
  }
  if (water === 1) {
    return `${water} copo de água`;
  }
  return `${water} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
