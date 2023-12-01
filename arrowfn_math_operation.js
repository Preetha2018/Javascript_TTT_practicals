// Arrow function to convert Fahrenheit to Celsius
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

// Function call and output
const tempInFahrenheit = 98.6;
console.log(`Temperature in Celsius: ${fahrenheitToCelsius(tempInFahrenheit)}`);
