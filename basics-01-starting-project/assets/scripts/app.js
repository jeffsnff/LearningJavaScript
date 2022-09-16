let result = 0;
let calculationDescription = `The numbers, ${result} and ${userInput.value} equal : `;

addBtn.addEventListener('click', add);

outputResult(result, `${calculationDescription}`);

// Functions go here

function add() {
  result = result + userInput.value;
  outputResult(result, `${calculationDescription}`);
}

function subtract(num1, num2) {
  const answer = num1 - num2;
  return answer;
}

function multiply(num1, num2) {
  return (result = num1 * num2);
}

function divide(num1, num2) {
  return num1 / num2;
}
