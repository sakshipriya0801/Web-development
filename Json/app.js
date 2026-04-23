// Task 2 Print all student names
const std = require('./students.json');

std.forEach(function(student) {
    console.log(student.name);
});

