function appendToDisplay(input) {
  document.getElementById("display").value += input;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    document.getElementById("display").value = eval(document.getElementById("display").value);
  } catch {
    document.getElementById("display").value = "Error";
  }
}

// Example calculator function (console demo)
function calculator() {
  let num1 = 15;
  let num2 = 4;

  console.log(`Numbers: ${num1} and ${num2}`);
  console.log(`Addition: ${num1} + ${num2} = ${num1 + num2}`);
  console.log(`Subtraction: ${num1} - ${num2} = ${num1 - num2}`);
  console.log(`Multiplication: ${num1} * ${num2} = ${num1 * num2}`);
  console.log(`Division: ${num1} / ${num2} = ${(num1 / num2).toFixed(2)}`);
  console.log(`Remainder: ${num1} % ${num2} = ${num1 % num2}`);
}

calculator();
