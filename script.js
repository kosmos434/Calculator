let screen = document.getElementById("entry");

let prevVal = "";
let newVal = "";
let resultVal = "";
let operatorVal = "";
let decimalClicked = false;

function numbPress(num) {
  if (resultVal) {
    newVal = num;
    resultVal = "";
  } else if (num === ".") {
    if (decimalClicked != true) {
      newVal += num;
      decimalClicked = true;
    }
  } else {
    newVal += num;
  }

  screen.value = newVal;
}

// if (num === '.') {
//     if (decimalClicked != true) {
//       newVal += num;
//       decimalClicked = true;
//     } else {
//       newVal += num;
//     }

function operPress(operator) {
  if (!resultVal) {
    prevVal = newVal;
  } else {
    prevVal = resultVal;
  }
  newVal = "";
  resultVal = "";
  decimalClicked = false;
  operatorVal = operator;
  screen.value = operatorVal;
}

function equalPress() {
  decimalClicked = false;
  prevVal = parseFloat(prevVal);
  newVal = parseFloat(newVal);

  switch (operatorVal) {
    case "+":
      resultVal = prevVal + newVal;
      break;
    case "-":
      resultVal = prevVal - newVal;
      break;
    case "*":
      resultVal = prevVal * newVal;
      break;
    case "/":
      resultVal = prevVal / newVal;
      break;
    default:
      resultVal = newVal;
  }

  prevVal = newVal;

  screen.value = resultVal;
}

function clearScreen() {
  prevVal = "";
  newVal = "";
  resultVal = "";
  operatorVal = "";
  decimalClicked = false;
  screen.value = "0";
}
