let num1 = prompt("Enter a number:");
let num2 = prompt("Enter another number:");
let operation = prompt("Enter an operation (add, subtract, multiply, divide):");

num1 = Number(num1);
num2 = Number(num2);

let result;

switch(operation) {
    case 'add':
        result = num1 + num2;
        break;
    case 'subtract':
        result = num1 - num2;
        break;
    case 'multiply':
        result = num1 * num2;
        break;
    case 'divide':
        if(num2 !== 0) {
            result = num1 / num2;
        } else {
            alert("Cannot divide by zero");
        }
        break;
    default:
        alert("Invalid operation");
}

if(result !== undefined) {
    alert("The result is " + result);
}