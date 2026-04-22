document.getElementById('dob').addEventListener('change', function() {
    var dobValue = this.value;
    var ageField = document.getElementById('age');

    if (dobValue) {
        var dob = new Date(dobValue);
        var today = new Date();
        var age = today.getFullYear() - dob.getFullYear();
        var monthDiff = today.getMonth() - dob.getMonth();
        var dayDiff = today.getDate() - dob.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        if (age < 0) {
            ageField.value = '';
            alert('Date of Birth cannot be in the future.');
            this.value = '';
        } else {
            ageField.value = age;
        }
    } else {
        ageField.value = '';
    }
});

document.getElementById('admissionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var patientId = document.getElementById('patientId').value.trim();
    var name = document.getElementById('name').value.trim();
    var address = document.getElementById('address').value.trim();
    var city = document.getElementById('city').value.trim();
    var aadhaar = document.getElementById('aadhaar').value.trim();
    var contact = document.getElementById('contact').value.trim();
    var email = document.getElementById('email').value.trim();
    var bloodGroup = document.getElementById('bloodGroup').value;
    var dob = document.getElementById('dob').value;
    var age = document.getElementById('age').value;

    if (patientId === '') {
        alert('Please enter Patient ID.');
        return;
    }

    if (name === '') {
        alert('Please enter Name.');
        return;
    }

    if (!/^[a-zA-Z\s]+$/.test(name)) {
        alert('Name should contain only letters and spaces.');
        return;
    }

    if (address === '') {
        alert('Please enter Address.');
        return;
    }

    if (city === '') {
        alert('Please enter City.');
        return;
    }

    if (!/^[a-zA-Z\s]+$/.test(city)) {
        alert('City should contain only letters and spaces.');
        return;
    }

    if (aadhaar === '') {
        alert('Please enter Aadhaar Number.');
        return;
    }

    if (!/^\d{12}$/.test(aadhaar)) {
        alert('Aadhaar Number must be exactly 12 digits.');
        return;
    }

    if (contact === '') {
        alert('Please enter Contact Number.');
        return;
    }

    if (!/^\d{10}$/.test(contact)) {
        alert('Contact Number must be exactly 10 digits.');
        return;
    }

    if (email === '') {
        alert('Please enter Email.');
        return;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid Email address.');
        return;
    }

    if (bloodGroup === '') {
        alert('Please select Blood Group.');
        return;
    }

    if (dob === '') {
        alert('Please enter Date of Birth.');
        return;
    }

    if (age === '') {
        alert('Please enter a valid Date of Birth to calculate Age.');
        return;
    }

    alert('Patient admitted successfully!\n\nName: ' + name + '\nAge: ' + age + '\nBlood Group: ' + bloodGroup);
});
