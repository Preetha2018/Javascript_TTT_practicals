// Using alert to display a message
alert("Welcome to JavaScript!");

// Using prompt to get user input
var userName = prompt("Please enter your name:");
if (userName !== null && userName !== "") {
    // Display a personalized greeting using alert
    alert("Hello, " + userName + "! How are you today?");
} else {
    // Display a message if the user cancels or leaves the input blank
    alert("You didn't enter your name. Please refresh the page and try again.");
}
