const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

// Checks user input and converts to number
function conversion(userInput) {
  if (userInput === '') {
    return (userNumber = 0);
  } else {
    return (userNumber = parseFloat(userInput));
  }
}
// creates description for calculation
function calcDescrip(result, symbol, userNumber) {
  return (descript = `${result} ${symbol} ${userNumber}`);
}

function calculation(calc, prevNumber, userNumber) {
  if (calc == '+') {
    return prevNumber + userNumber;
  } else if (calc == '-') {
    return prevNumber - userNumber;
  } else if (calc == '*') {
    return prevNumber * userNumber;
  } else if (calc == '/') {
    return prevNumber / userNumber;
  }
}

function writeToLog(operationID, prevNumber, userNumber, result) {
  const logEntry = {
    operation: operationID,
    prevNumber: prevNumber,
    userNumber: userNumber,
    result: result,
  };
  console.log(logEntry)
}

// combines all the functions used into a single function
function allTheCode(userInput, symbol) {
  conversion(userInput.value);
  calcDescrip(result, symbol, userNumber);
  // outputResult(result, `${descript}`);
}
