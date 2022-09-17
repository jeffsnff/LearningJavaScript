const userInput = document.getElementById('input-number');
const userName = document.getElementById('user-name')
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

// converts user input to a number as well makes sure userInput is a number if a empty string
function conversion(userInput) {
	if(userInput === ''){
		return userNumber = 0;
	}else{
		return userNumber = parseFloat(userInput);
	}
}
// creates description
function calcDescrip(result, symbol, userNumber){
	return descript = `${result} ${symbol} ${userNumber}`;
}

// does all the work
function allTheCode(userInput, symbol){
	conversion(userInput.value);
	calcDescrip(result, symbol, userNumber);
  outputResult(result, `${descript}`);
}