<?php
    session_start();

    $pesel=$_POST['pesel'];
    $key=$_POST['KEY'];
    $email=$_POST['email']; 
if ( (!isset($pesel)))
{
    header("Location: formularz.html");
    exit();
}
echo "PRZYJENTO PESEL O NUMERACH $pesel <br>";
echo "Klucz poprawny $key <br>";
echo "Email: $email";
?>



