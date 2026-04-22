const fs = require('fs');

fs.readFile('data.json', 'utf8', function(err, data) {
    if (err) {
        console.log('Error reading file:', err.message);
        return;
    }

    try {
        var jsonData = JSON.parse(data);
        var totalStudents = jsonData.students.length;
        console.log('Total Students:', totalStudents);
    } catch (parseErr) {
        console.log('Error parsing JSON:', parseErr.message);
    }
});
