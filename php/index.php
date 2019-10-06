<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname="test";

// Stwórz połączenie
$conn = new mysqli($servername, $username, $password,$dbname);

// Sprawdż polączenie
if ($conn->connect_error) {
    die("Nie udało się: " . $conn->connect_error); // wyrzuca błąd
}
echo "Polączono się<br>";


// Stworzenie zapytania
$sql = "Select * from test ";
$result = $conn->query($sql);
if ($result) {
    echo "Zapytanie się udało<br>";
} else {
    echo "Nie udało się zapytanie<br>: " . $conn->error;
}

if ($result->num_rows > 0) {
    // wyswietla dane dla kazdego wiersza
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Imie: " . $row["imie"]. " " . $row["nazwisko"]." ". $row["data urodzenia"]. "<br>";
    }
} else {
    echo "zero wynikow";
}



$conn->close();
?>




