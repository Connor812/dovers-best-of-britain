<?php

$SERVERNAME = "localhost";
$USERNAME = "root";
$PASSWORD = "";
$DBNAME = "dovers_best_of_britain";

// Create connection
$conn = new mysqli($SERVERNAME, $USERNAME, $PASSWORD, $DBNAME);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// echo "Connected successfully";
