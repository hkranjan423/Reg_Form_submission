<?php
$servername = "localhost";
$username = "root"; // Replace with your MySQL username
$password = "Himanshu@423"; // Replace with your MySQL password
$dbname = "WIMS2021";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO users (first_name, last_name, email_address, password, address, mobile_no, gender) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssss", $firstName, $lastName, $email, $password, $address, $mobileNo, $gender);

// Set parameters and execute
$firstName = $_POST['first_name'];
$lastName = $_POST['last_name'];
$email = $_POST['email_address'];
$password = $_POST['password'];
$address = $_POST['address'];
$mobileNo = $_POST['mobile_no'];
$gender = $_POST['gender'];

if ($stmt->execute()) {
    echo "Registration Successful";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>