let result = 0;
let userNumber;
let descript = '';

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


// Functions go here

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

// adds user input to previous result
function add() {
	allTheCode(userInput, '+');
	result = result + userNumber;
}

function subtract() {
	allTheCode(userInput, '-');
	result = result - userNumber;
}

function multiply() {
	allTheCode(userInput, '*');
	result = result * userNumber;
}

function divide() {
	allTheCode(userInput, '/');
	result = result / userNumber;
}
