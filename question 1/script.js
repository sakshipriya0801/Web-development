document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var gender = document.querySelector('input[name="gender"]:checked');
    var qualification = document.getElementById('qualification').value;
    var skills = document.querySelectorAll('input[name="skills"]:checked');
    var password = document.getElementById('password').value;

    // Validate empty fields
    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    if (email === '') {
        alert('Please enter your email.');
        return;
    }

    if (phone === '') {
        alert('Please enter your phone number.');
        return;
    }

    if (!gender) {
        alert('Please select your gender.');
        return;
    }

    if (qualification === '') {
        alert('Please select your qualification.');
        return;
    }

    if (skills.length === 0) {
        alert('Please select at least one skill.');
        return;
    }

    if (password === '') {
        alert('Please enter your password.');
        return;
    }

    // Validate email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate phone length (at least 10 digits)
    if (phone.length < 10) {
        alert('Phone number must be at least 10 digits long.');
        return;
    }

    // If all validations pass
    alert('Registration successful! Thank you for registering.');
});
