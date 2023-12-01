// Function to calculate the area of a rectangle with default values
function calculateRectangleArea(length = 5, width = 3) {
    return length * width;
}

// Function calls with different scenarios
console.log("Area:", calculateRectangleArea()); // Uses default values: 5 * 3 = 15
console.log("Area:", calculateRectangleArea(8)); // Uses default width: 8 * 3 = 24
console.log("Area:", calculateRectangleArea(8, 6)); // Uses provided values: 8 * 6 = 48
