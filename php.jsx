<?php
$servername = "localhost";
$username = "root";
$password = "";

$conn = mysqli_connect($servername, $username, $password);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

echo "<script>alert('Connected Successfully');</script>";

if (isset($_POST['submit'])) {

    $NAME = $_POST['username'];
    $PASSWORD = $_POST['password'];
    $ADDRESS = $_POST['address'];
    $EMAIL = $_POST['email_address'];

    $sql1 = "CREATE DATABASE IF NOT EXISTS mydatabasesss";
    mysqli_query($conn, $sql1);

    mysqli_select_db($conn, "mydatabasesss");

    $sql2 = "CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(50) NOT NULL,
                password VARCHAR(255) NOT NULL,
                address VARCHAR(200),
                email VARCHAR(100) UNIQUE
            )";
    mysqli_query($conn, $sql2);

    $sql3 = "INSERT INTO users (username, password, address, email)
             VALUES ('$NAME', '$PASSWORD', '$ADDRESS', '$EMAIL')";





    if (mysqli_query($conn, $sql3)) {
        echo "<script>alert('Data Inserted Successfully');</script>";
    } else {
        echo "<script>alert('Insert failed: " . mysqli_error($conn) . "');</script>";
    }

$sql4 = "SELECT * FROM users";
$result = mysqli_query($conn, $sql4);

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "ID: " . $row["id"] . " | ";
        echo "Username: " . $row["username"] . " | ";
        echo "Password: " . $row["password"] . " | ";
        echo "Address: " . $row["address"] . " | ";
        echo "Email: " . $row["email"];
        echo "<br>";
    }
} else {
    echo "No data found";
}

}
?>
