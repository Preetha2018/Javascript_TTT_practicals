// Example string
const originalString = "JavaScript is a powerful scripting language.";

// Displaying the original string
console.log("Original String:", originalString);

// String length
const stringLength = originalString.length;
console.log("String Length:", stringLength);

// Accessing characters
const firstCharacter = originalString[0];
console.log("First Character:", firstCharacter);

const lastCharacter = originalString[stringLength - 1];
console.log("Last Character:", lastCharacter);

// Substring
const substringExample = originalString.substring(0, 10);
console.log("Substring (0 to 10):", substringExample);

// Concatenation
const newString = originalString + " It is used for web development.";
console.log("Concatenated String:", newString);

// String methods
const upperCaseString = originalString.toUpperCase();
console.log("Uppercase:", upperCaseString);

const lowerCaseString = originalString.toLowerCase();
console.log("Lowercase:", lowerCaseString);

const indexOfScript = originalString.indexOf("Script");
console.log("Index of 'Script':", indexOfScript);

const replacedString = originalString.replace("JavaScript", "Python");
console.log("Replaced String:", replacedString);

// Splitting into an array
const wordsArray = originalString.split(" ");
console.log("Words Array:", wordsArray);

// Joining an array into a string
const joinedString = wordsArray.join("-");
console.log("Joined String:", joinedString);
