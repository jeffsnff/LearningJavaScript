let result = 0;
let userNumber;
let descript = '';

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


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
