// Core Javascript-01 - Assignment

// Question 1 - sol.

function gradeStudent(marks) {
    if (marks > 90) {
        return 'A Grade';
    } else if (marks >= 70 && marks <= 90) {
        return 'B Grade';
    } else if (marks >= 50 && marks < 70) {
        return 'C Grade';
    } else {
        return 'F Grade';
    }
}

// Lets take an example:
var studentMarks = 85;
var studentGrade = gradeStudent(studentMarks);
console.log('Student Grade:', studentGrade);


// Question 2 - sol.
const num1 = 10;
const numI = 25;

for (let i = num1 + 1; i < numI; i++) {
    console.log(i);
}

// Question 3 - sol.
const number = 7;

const result = (number > 0) ? "positive" : (number < 0) ? "negative" : "zero";

console.log(result);

// Question 4 - sol.
// Example
let a = 5, b = 10;

// The comma operator is used to combine two expressions.
{
    let result = (a++, b++);
    console.log("a:", a); // Output: 6
    console.log("b:", b); // Output: 11
    console.log("result:", result); // Output: 10
}

// Question 5 - sol.
function login(username, password) {
    // Check if the provided username and password are correct
    if (username === "admin" && password === "12375") {
        console.log("Login successful");
    } else {
        console.log("Invalid credentials");
    }
}

// Example usage:
login("admin", "12375"); // Output: Login successful

// Example with incorrect credentials:
login("user123", "password456"); // Output: Invalid credentials

// Question 6 - sol.

function calculateProcessingFee(paymentMethod) {
    let processingFee;

    switch (paymentMethod.toLowerCase()) {
        case "credit":
            processingFee = 2;
            break;
        case "debit":
            processingFee = 1.5;
            break;
        case "paypal":
            processingFee = 3;
            break;
        default:
            console.log("Invalid payment method");
            return; // Exit the function for invalid payment methods
    }

    console.log(`Processing fee for ${paymentMethod}: ${processingFee}%`);
}

// Example usage:
calculateProcessingFee("credit"); // Output: Processing fee for credit: 2%
calculateProcessingFee("debit");  // Output: Processing fee for debit: 1.5%
calculateProcessingFee("paypal"); // Output: Processing fee for paypal: 3%
calculateProcessingFee("bitcoin"); // Output: Invalid payment method

// Question 7 - sol.
function determineWeatherCondition(temperature) {
    let weatherCondition = temperature > 30 ? "Hot" : "Moderate";
    console.log(`The weather condition is: ${weatherCondition}`);
}

// Example usage:
determineWeatherCondition(25);  // Output: The weather condition is: Moderate
determineWeatherCondition(35);  // Output: The weather condition is: Hot

// Question 8 - sol.
function calculateSumUpToN(n) {
    if (n <= 0) {
        console.log("Please enter a positive integer.");
        return;
    }

    let sum = 0;
    let i = 1;

    do {
        sum += i;
        i++;
    } while (i <= n);

    console.log(`The sum of numbers from 1 to ${n} is: ${sum}`);
}

// Example usage:
calculateSumUpToN(5);  // Output: The sum of numbers from 1 to 5 is: 15
calculateSumUpToN(10); // Output: The sum of numbers from 1 to 10 is: 55



