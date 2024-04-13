<?php
$host = 'localhost';
$username = 'Enter your username';
$password = 'enter yout password';
// create database todo first after run php
$database = 'todo';

$conn = mysqli_connect($host, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
