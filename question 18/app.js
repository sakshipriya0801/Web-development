var students = [
    {
        id: 1,
        name: "Alice Johnson",
        marks: 85
    },
    {
        id: 2,
        name: "Bob Smith",
        marks: 78
    },
    {
        id: 3,
        name: "Charlie Brown",
        marks: 92
    }
];

function getAllStudents() {
    console.log("All Students:");
    for (var i = 0; i < students.length; i++) {
        console.log(students[i].id + ". " + students[i].name + " - Marks: " + students[i].marks);
    }
    return students;
}

function getStudentByName(name) {
    for (var i = 0; i < students.length; i++) {
        if (students[i].name === name) {
            console.log("\nFound Student:");
            console.log(students[i]);
            return students[i];
        }
    }
    console.log("\nStudent not found: " + name);
    return null;
}

function getAverageMarks() {
    var total = 0;
    for (var i = 0; i < students.length; i++) {
        total = total + students[i].marks;
    }
    var average = total / students.length;
    console.log("\nAverage Marks: " + average);
    return average;
}

getAllStudents();
getStudentByName("Bob Smith");
getAverageMarks();
