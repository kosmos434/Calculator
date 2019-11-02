const keys = document.querySelectorAll(".calc-button");

let prevVal = "";
let newVal = "";
let result = "";
let operator = "";
let decimalClicked = false;


 keys.forEach((button) => {
     button.addEventListener('click', () => {
         console.log("Clicked :)");
     });
 });


function numbPress(num) {

}

function operPress(operator) {

}

function equalPress() {

}


function adding(a, b) {
    return a + b;
}

function subtracting(a, b) {
    return a - b;
}

function multiplying(a, b) {
    return a * b;
}

function dividing(a, b) {
    return a / b;
}

function operate(operator, num1, num2) {
    operator(num1, num2);
}

function clearScreen() {
    prevVal = "";
    newVal = "";
    result = "";
    operator = "";
    decimalClicked = false;
    document.getElementById("entry").value = "0";
}

// TO DO
// Query Select Keys
// Update display function
// Clear function
// 