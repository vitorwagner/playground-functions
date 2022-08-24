// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 && boolean2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
// Referência para template strings: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals
function concatName(stringArray) {
  return `${stringArray[stringArray.length - 1]}, ${stringArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
// Utilizando função auxiliar para encontrar o valor máximo. Referência: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function findHighest(valueArray) {
  return Math.max.apply(null, valueArray);
}

function highestCount(valueArray) {
  let highest = findHighest(valueArray);
  let count = 0;
  for (let value of valueArray) {
    if (value === highest) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result;
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 < distanceCat2) {
    result = 'cat1';
  } else if (distanceCat1 > distanceCat2) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
// Uso de função auxiliar para reduzir complexidade da função 'fizzBuzz'.
function fizzBuzzCheck(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  } if (number % 3 === 0) {
    return 'fizz';
  } if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(numbersArray) {
  let fizzBuzzArray = [];
  for (let number of numbersArray) {
    fizzBuzzArray.push(fizzBuzzCheck(number));
  }
  return fizzBuzzArray;
}

// Desafio 9
// Método força bruta
function encode(unencodedString) {
  let lettersArray = unencodedString.split('');
  for (let i = 0; i < lettersArray.length; i += 1) {
    lettersArray[i] = lettersArray[i].replace('a', '1');
    lettersArray[i] = lettersArray[i].replace('e', '2');
    lettersArray[i] = lettersArray[i].replace('i', '3');
    lettersArray[i] = lettersArray[i].replace('o', '4');
    lettersArray[i] = lettersArray[i].replace('u', '5');
  }
  let encodedString = lettersArray.join('');
  return encodedString;
}

function decode(encodedString) {
  let lettersArray = encodedString.split('');
  for (let i = 0; i < lettersArray.length; i += 1) {
    lettersArray[i] = lettersArray[i].replace('1', 'a');
    lettersArray[i] = lettersArray[i].replace('2', 'e');
    lettersArray[i] = lettersArray[i].replace('3', 'i');
    lettersArray[i] = lettersArray[i].replace('4', 'o');
    lettersArray[i] = lettersArray[i].replace('5', 'u');
  }
  let decodedString = lettersArray.join('');
  return decodedString;
}

// Desafio 10
function techList(techArray, name) {
  if (techArray.length === 0) {
    return 'Vazio!';
  }
  let sortedArray = techArray.sort();
  let newTechArray = [];
  for (let technology of sortedArray) {
    newTechArray.push({ tech: technology, name });
  }
  return newTechArray;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
