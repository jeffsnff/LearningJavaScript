let result = 0;
let userNumber;
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
	allTheCode(userInput, '+'); // located in vendor.js file
	result = result + userNumber;
}

function subtract() {
	allTheCode(userInput, '-');
	result = result - userNumber;
}

function multiply() {
	if(isNaN(result)){
		result = 0;
	}
	allTheCode(userInput, '*');
	result = result * userNumber;
}

function divide() {
	if(isNaN(result)){
		result = 0;
	}
	allTheCode(userInput, '/');
	result = result / userNumber;
}
