<?php

	session_start();
	if($_SESSION["zalogowany"] == false)
	{
		header("Location: index.html");
		exit();
	}
	
	$user_m = "";
	
	if($_SESSION["admin"] == true)
	{
		$user_m  = "admin";
	}
	else if($_SESSION["admin"] == false)
	{
		$user_m  = $_SESSION["nazwa_uzytkownika"];
	}

  $NazwaKompozycji = $_POST["NKompozycji"];	
  $Napoj1 = $_POST["Napoj1"];
  $Napoj1Ilosc = $_POST["Napoj1Ilosc"];
  $Napoj2 = $_POST["Napoj2"];
  $Napoj2Ilosc = $_POST["Napoj2Ilosc"];
  $Napoj3 = $_POST["Napoj3"];
  $Napoj3Ilosc = $_POST["Napoj3Ilosc"];
  $Napoj4 = $_POST["Napoj4"];
  $Napoj4Ilosc = $_POST["Napoj4Ilosc"];
  
  if($NazwaKompozycji == "")
  {
	die();
  }

  $ip = "localhost";
  $user = "root";
  $pswd = "";
  $db = "maszyna";

  $conn = new mysqli($ip, $user, $pswd, $db);
  if($conn->connect_error)
  {
    echo "Wystąpił problem z połączeniem z bazą danych !" ;
    echo "<br />";
  }
  $id_uzytkownika = $_SESSION["id_uzytkownika"];
  $zapytanie = "INSERT INTO kompozycjenapojow (User, IDusera, NazwaKompozycji, Napoj1, Napoj1Ilosc, Napoj2, Napoj2Ilosc, Napoj3, Napoj3Ilosc, Napoj4, Napoj4Ilosc) VALUES ('$user_m','$id_uzytkownika','$NazwaKompozycji','$Napoj1','$Napoj1Ilosc','$Napoj2','$Napoj2Ilosc','$Napoj3','$Napoj3Ilosc','$Napoj4','$Napoj4Ilosc')";
  if($conn->query($zapytanie))
  {
    echo "Dodano nowe wartosci";
  }
  else
  {
    echo "Wystapil blad";
  }
  $conn->close();

?>
