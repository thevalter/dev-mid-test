const readLineSync = require('readline-sync');

// Exercise 1: Simple Calculator

const SimpleCalculator = () => {

    const operator = readLineSync.question('Select operator: \n (+) \n (-) \n (*) \n (/) \n ');
    const value1 = Number(readLineSync.question('Enter first value: '));
    const value2 = Number(readLineSync.question('Enter second value: '));

    const doOperation = (operator, value1, value2) => {
        if (operator == "+") {
            return value1 + value2;
        } else if
            (operator == "-") {
            return value1 - value2;
        } else if
            (operator == "*") {
            return value1 * value2;
        } else if
            (operator == "/") {
            return value1 / value2;
        } else {
            throw new Error('Invalid operation');
        }
    }

    return console.log(doOperation(operator, value1, value2));
}

// Exercise 2: Prime Numbers

const isPrime = (num) => {

    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    };
    return true;
};

const verifiedPrimeNumber = () => {

    const num = Number(readLineSync.question('Insert a number: '));

    isPrime(num) ? console.log(`${num} is prime number`) : console.log(`${num} is not prime number`);
}

const generatePrime = () => {

    const arr = [];
    let i = 2;

    while (arr.length < 10) {
        if (isPrime(i)) {
            arr.push(i);
        };
        i = i === 2 ? i + 1 : i + 2;
    };

    const result = arr.map(number => console.log(number));

    return result;

};

// Exercise 3: Factorial

const calculateFactorial = () => {

    const num = Number(readLineSync.question('Insert a number to calculate factorial: '));

    if (num < 0) {
        console.log('Error! Factorial for negative number does not exist.');
    }

    else if (num === 0) {
        console.log(`The factorial of ${number} is 1.`);
    }

    else {
        let fact = 1;
        for (i = 1; i <= num; i++) {
            fact *= i;
        }
        console.log(`The factorial of ${num} is ${fact}.`);
    }
}

// Exercise 4: Palindrome

const isPalindrome = () => {

    const str = readLineSync.question('Insert a word or phrase: ')

    str.toLowerCase() == str.split('').reverse().join('').toLowerCase()
     ? console.log(`${str} is palindrome`)
     : console.log(`${str} is not palindrome`);
}

// Exercise 5: Table

const createTable = () => {

    const num = Number(readLineSync.question('Insert a number: '));

    for (let i = 1; i <= 10; i++) {

        const result = i * num;
        console.log(`${num} * ${i} = ${result}`);
    }
}

// Exercise 6: Vowel Counter

const countVowel = () => {

    const str = readLineSync.question('Insert a word or phrase: ');

    const count = str.match(/[aeiou]/gi).length;

    return console.log(`Contains exactly ${count} vowels`);
}

// Exercise 7: Grade Average

const gradeAverage = () => {

    const average1 = Number(readLineSync.question('Enter first average: '));
    const average2 = Number(readLineSync.question('Enter second average: '));
    const average3 = Number(readLineSync.question('Enter third average: '));

    const result = (average1 + average2 + average3) / 3;

    return console.log(result);
}

// Exercise 8: Interest Calculation

const InterestCalculation = () => {

    const investment = Number(readLineSync.question('Enter a initial value of investment: '));
    const rate = Number(readLineSync.question('Insert the rate: '));
    const months = Number(readLineSync.question('Insert time (in months): '));

   const result = investment + (investment * rate * months) / 100;

   return console.log(`The return on investment will be ${result}`);
}



// Call the functions:


// SimpleCalculator();

// verifiedPrimeNumber();

// generatePrime();

// calculateFactorial();

// isPalindrome();

// createTable();

// countVowel();

// gradeAverage();

// InterestCalculation();




