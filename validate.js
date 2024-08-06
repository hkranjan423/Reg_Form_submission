function validateForm() {
    var firstName = document.forms["registrationForm"]["first_name"].value;
    var lastName = document.forms["registrationForm"]["last_name"].value;
    var email = document.forms["registrationForm"]["email_address"].value;
    var password = document.forms["registrationForm"]["password"].value;
    var confirmPassword = document.forms["registrationForm"]["confirm_password"].value;
    var address = document.forms["registrationForm"]["address"].value;
    var mobileNo = document.forms["registrationForm"]["mobile_no"].value;
    var gender = document.forms["registrationForm"]["gender"].value;

    // First Name validation
    if (firstName.length < 6 || !/^[a-zA-Z]+$/.test(firstName)) {
        alert("First name must be at least 6 characters long and contain only alphabets.");
        return false;
    }

    // Last Name validation
    if (lastName === "") {
        alert("Last name cannot be empty.");
        return false;
    }

    // Email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email format.");
        return false;
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Address validation
    if (address === "") {
        alert("Address cannot be empty.");
        return false;
    }

    // Mobile Number validation
    if (mobileNo.length !== 10 || !/^\d+$/.test(mobileNo)) {
        alert("Mobile number must contain exactly 10 digits.");
        return false;
    }

    return true;
}