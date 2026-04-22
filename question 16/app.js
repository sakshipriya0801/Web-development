const fs = require('fs');

var students = [
    {
        "id": 1,
        "name": "Alice Johnson",
        "grade": "A",
        "age": 20
    },
    {
        "id": 2,
        "name": "Bob Smith",
        "grade": "B",
        "age": 22
    }
];

var jsonString = JSON.stringify(students, null, 2);

fs.writeFileSync('students.json', jsonString);

console.log('File created successfully! students.json has been saved.');
