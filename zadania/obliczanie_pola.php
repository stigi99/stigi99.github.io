<?php
//POLE KWADRATU
if (!isset($_SERVER['HTTP_REFERER']))
    header("Location: pole_kwadratu.html");

if (isset($_POST["bok2"])){
$bok2=$_POST["bok2"];
if( !is_numeric($bok2) || $bok2<0 ){
    

    echo("Wprowadziles zle dane popraw je bo jedynka ");
    

    header('Refresh: 10; url=pole_kwadratu.html');
}
else {
 //$bok=$_POST["bok"];
 //$pole=$bok*$bok;
//$pole=$bok*$bok;
$pole2=$bok2*$bok2;
echo ("POLE WYNOSI $pole2 cm<sup>2</sup>");
}
}


//POLE KOLA


if (isset($_GET["promien"]))
{
$promien=$_GET["promien"];
if ($promien<0 || !is_numeric($promien) ){
    echo("Wprowadziles zle dane popraw je");
    header('Refresh: 10; url=pole_kwadratu.html');
}
else {
$pole3=M_PI * $promien * $promien;
echo ("POLE WYNOSI $pole3 cm<sup>2</sup>");
}
}





?>