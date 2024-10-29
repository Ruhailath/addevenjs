function checkOddOrEven(number) {
    if (number % 2 === 0) {
        return "It is Even Number";
    } else {
        return "It is Odd Number";
    }
}
// Get user input from a browser prompt
//let userInput = prompt("Enter a number:");
let number = 10; // Convert the input to an integer
console.log(checkOddOrEven(number));
