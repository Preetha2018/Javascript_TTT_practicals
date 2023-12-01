// Creating an Employee object
const employee = {
    firstName: "Preetha",
    lastName: "jeo",
    age: 28,
    position: "Software Developer",
    department: "Engineering",
    salary: 75000,
    isFullTime: true,
    skills: ["JavaScript", "React", "Node.js"],
    address: {
        street: "789 BSK",
        city: "Chennai",
        country: "India"
    },
    displayInfo: function() {
        console.log(`Employee Information:
            Name: ${this.firstName} ${this.lastName}
            Age: ${this.age}
            Position: ${this.position}
            Department: ${this.department}
            Salary: $${this.salary}
            Full-Time: ${this.isFullTime ? 'Yes' : 'No'}
            Skills: ${this.skills.join(", ")}
            Address: ${this.address.street}, ${this.address.city}, ${this.address.country}`);
    },
    promote: function(newPosition, newSalary) {
        this.position = newPosition;
        this.salary = newSalary;
        console.log(`${this.firstName} has been promoted to ${newPosition} with a salary of $${newSalary}.`);
    }
};

// Accessing and displaying individual properties
console.log("Employee Name:", employee.firstName, employee.lastName);
console.log("Employee Age:", employee.age);
console.log("Employee Position:", employee.position);

// Calling the displayInfo method to display all information
employee.displayInfo();

// Promoting the employee
employee.promote("Senior Software Developer", 90000);
