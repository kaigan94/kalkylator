function calculator() {
  let number1 = prompt("Choose the first number");
  let number2 = prompt("Choose the second number");
  let operation = prompt("Choose operation (+, -, *, /):");

  let result;

  switch (operation) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      if (number2 !== 0) {
        result = number1 / number2;
      } else {
        alert("Error: Division with 0 not allowed.");
        return;
      }
      break;
    default:
      alert("Invalid operation.");
      return;
  }

  // Visa resultatet
  alert(`Result is: ${result}`);
  console.log(`Result of ${number1} ${operation} ${number2} is: ${result}`);
}

// Testa kalkylatorn
calculator();
