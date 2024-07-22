//-------------------------------------------------------------JavaScript Coding Challenges-----------------------------------------------------

// JavaScript Coding Challenges on Numbers 
// Write a program in JavaScript to -

// 1. Convert decimal numbers to octal numbers.
// 2. Reverse an integer.
// 3. Print the Fibonacci series using the recursive method.
// 4. Return the Nth value from the Fibonacci sequence.
// 5. Find the average of numbers (with explanations).
// 6. Convert Celsius to Fahrenheit.

//----------------------------------------------------------------Solution of Problem:----------------------------------------------------------

// 1. Converting Decimal Numbers to Octal Numbers:
function convertDecimalToOctal(decimal_number) {
    let octal_number = [];

    while (decimal_number > 0) {
        octal_number.push(decimal_number % 8);
        decimal_number = Math.floor(decimal_number / 8);
    }

    return octal_number.reverse().join('');
}

const decimalNumber = 25;
const octalNumber = convertDecimalToOctal(decimalNumber);
console.log(`Octal number: ${octalNumber}`);

//----------------------------------------------------------------------------------------------------------------------------------------------

// 2. Reversing an Integer:
function reverseInteger(number) {
    let reversed_number = 0;

    while (number !== 0) {
        reversed_number = reversed_number * 10 + number % 10;
        number = Math.floor(number / 10);
    }

    return reversed_number;
}

const numberToReverse = 12345;
const reversedNumber = reverseInteger(numberToReverse);
console.log(`Reversed number: ${reversedNumber}`);

//----------------------------------------------------------------------------------------------------------------------------------------------

// 3. Printing the Fibonacci Series using Recursion:
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function printFibonacciSeries(length) {
    let series = [];
    for (let i = 0; i < length; i++) {
        series.push(fibonacci(i));
    }
    return series.join(' ');
}

const fibonacciLength = 10;
const fibonacciSeries = printFibonacciSeries(fibonacciLength);
console.log(`Fibonacci series: ${fibonacciSeries}`);

//----------------------------------------------------------------------------------------------------------------------------------------------

// 4. Returning the Nth Value from the Fibonacci Sequence:
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const nthFibonacci = 10;
const nthFibonacciNumber = fibonacci(nthFibonacci);
console.log(`The ${nthFibonacci}th Fibonacci number is: ${nthFibonacciNumber}`);

//----------------------------------------------------------------------------------------------------------------------------------------------

// 5. Finding the Average of Numbers:
function calculateAverage(numbers) {
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

const numbersArray = [10, 20, 30, 40, 50];
const average = calculateAverage(numbersArray);
console.log(`Average: ${average}`);
