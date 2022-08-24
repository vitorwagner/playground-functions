// Desafio 11
// Para atender a todos os requisitos do desafio foi necessário quebrar a funcionalidade em várias funções auxiliares.
function checkInvalidNumber(numberArray) {
  for (let number of numberArray) {
    if (number < 0 || number > 9) {
      return true;
    }
  }
  return false;
}

// Função auxiliar para fazer a contagem dos elementos no array. Referência: https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
function numberCount(numberArray) {
  let count = {};
  numberArray.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
  return count;
}

function countCheck(count) {
  let countObject = numberCount(count);
  for (let key in countObject) {
    if (countObject[key] >= 3) {
      return true;
    }
  }
  return false;
}

function generatePhoneNumber(numberArray) {
  if (numberArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (checkInvalidNumber(numberArray) === true || countCheck(numberArray) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let ddd = `(${numberArray.splice(0, 2).join('')})`;
  let phoneNumber = `${ddd} ${numberArray.splice(0, 5).join('')}-${numberArray.join('')}`;
  return phoneNumber;
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
    water += number;
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
