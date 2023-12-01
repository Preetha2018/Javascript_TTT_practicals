// Global variable
let globalVariable = "I am global.";

function demonstrateScope() {
    // Local variable within the function
    let localVariable = "I am local.";

    // Accessing both global and local variables
    console.log("Inside the function:");
    console.log("Global Variable:", globalVariable);
    console.log("Local Variable:", localVariable);

    // Modifying the local variable
    localVariable = "I have been modified locally.";

    // Creating a new local variable with the same name
    let localVariable = "I am a new local variable.";

    // Accessing the newly created local variable
    console.log("New Local Variable:", localVariable);

    // Attempting to access a non-existent variable
    // This will result in a ReferenceError
    // console.log("Undefined Variable:", undefinedVariable);
}

// Accessing the global variable
console.log("Outside the function:");
console.log("Global Variable:", globalVariable);

// Attempting to access the local variable outside the function
// This will result in a ReferenceError
// console.log("Local Variable:", localVariable);

// Calling the function to demonstrate scope
demonstrateScope();
