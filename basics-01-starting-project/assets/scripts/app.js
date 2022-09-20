let result = 0;
let userNumber;
let prevResult;
let descript = '';

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// This is a line comment
/*
	This is a block comment
*/

function add() {
  let symbol = '+';
  prevResult = result;
  allTheCode(userInput, symbol);
  result = calculation(symbol, prevResult, userNumber);
  outputResult(result, `${descript}`);
}

function subtract() {
  let symbol = '-';
  prevResult = result;
  allTheCode(userInput, symbol);
  result = calculation(symbol, prevResult, userNumber);
  outputResult(result, `${descript}`);
}

function multiply() {
  if (isNaN(result)) {
    result = 0;
  }
  let symbol = '*';
  prevResult = result;
  allTheCode(userInput, symbol);
  result = calculation(symbol, prevResult, userNumber);
  outputResult(result, `${descript}`);
}

function divide() {
  if (isNaN(result)) {
    result = 0;
  }
  let symbol = '/';
  prevResult = result;
  allTheCode(userInput, symbol);
  result = calculation(symbol, prevResult, userNumber);
  outputResult(result, `${descript}`);
}
