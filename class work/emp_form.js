// Task 2
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "") {
        alert("Name cannot be empty")
        ;
        return false;
    }

    if (email === "") {
        alert("Email cannot be empty");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
// Task 3
function showRegister(){
     alert("Registered Succesfully")
}