
// Higher-order function with a callback
function filterArray(array, callback) {
    const filteredArray = [];
    
    for (const item of array) {
        if (callback(item)) {
            filteredArray.push(item);
        }
    }
    
    return filteredArray;
}

// Callback function to filter even numbers
function isEven(number) {
    return number % 2 === 0;
}

// Callback function to filter numbers greater than 5
function isGreaterThanFive(number) {
    return number > 5;
}

// Example usage
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = filterArray(numbers, isEven);
console.log("Even Numbers:", evenNumbers);

const greaterThanFive = filterArray(numbers, isGreaterThanFive);
console.log("Numbers Greater Than Five:", greaterThanFive);
