// Creating a Student object
const student = {
    firstName: "Preetha",
    lastName: "G",
    age: 29,
    grade: 85,
    courses: ["Math", "English", "Science"],
    address: {
        street: "456 BSK",
        city: "Bangalore",
        country: "India"
    },
    displayInfo: function() {
        console.log(`Student Information:
            Name: ${this.firstName} ${this.lastName}
            Age: ${this.age}
            Grade: ${this.grade}
            Courses: ${this.courses.join(", ")}
            Address: ${this.address.street}, ${this.address.city}, ${this.address.country}`);
    },
    enrollCourse: function(course) {
        this.courses.push(course);
        console.log(`${this.firstName} has enrolled in the ${course} course.`);
    }
};

// Accessing and displaying information
console.log("Student Name:", student.firstName, student.lastName);
console.log("Age:", student.age);
console.log("Address:", student.address.street, student.address.city, student.address.country);
console.log("Courses:", student.courses.join(", "));
console.log("Grade:", student.grade);

// Calling object methods
student.displayInfo();

// Enrolling in a new course
student.enrollCourse("History");
