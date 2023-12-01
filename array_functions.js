// Array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to filter even numbers
const findEvenNumbers = (array) => array.filter(number => number % 2 === 0);

// Find even numbers using the function
const evenNumbers = findEvenNumbers(numbers);

// Output
console.log("Original Array:", numbers);
console.log("Even Numbers:", evenNumbers);
