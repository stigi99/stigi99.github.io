<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pracownicy";
function walidacja($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    $data = htmlentities($data);
    return $data;
  }


  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	
$id=walidacja($_POST['id']);
$imie=walidacja($_POST['imie']);
$nazwisko=walidacja($_POST['nazwisko']);
$stanowisko=walidacja($_POST['stanowisko']);
$placa=walidacja($_POST['placa']);
echo $id.$imie.$nazwisko.$stanowisko.$placa;




$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


$sql = "INSERT INTO pracownicy (id, imie, nazwisko,stanowisko,placa)
VALUES ('$id', '$imie', '$nazwisko','$stanowisko','$placa')";

if (mysqli_query($conn, $sql)) {
    echo "<br>Dodano nowy rekord";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);


  }
else{
exit('Invalid Request');
}


?>