<?php

        session_start();
        if($_SESSION["zalogowany"] == false)
        {
                header("Location: index.html");
                exit();
        }


  $Napoj1 = $_POST["Napoj1"];
  $Napoj1Ilosc = $_POST["Napoj1Ilosc"];
  $Napoj2 = $_POST["Napoj2"];
  $Napoj2Ilosc = $_POST["Napoj2Ilosc"];
  $Napoj3 = $_POST["Napoj3"];
  $Napoj3Ilosc = $_POST["Napoj3Ilosc"];
  $Napoj4 = $_POST["Napoj4"];
  $Napoj4Ilosc = $_POST["Napoj4Ilosc"];


  $ip = "localhost";
  $user = "root";
  $pswd = "";
  $db = "maszyna";

  
  $conn1 = new mysqli($ip, $user, $pswd, $db);
  if($conn1->connect_error)
  {
    echo "Wystąpił problem z połączeniem z bazą danych !" ;
    echo "<br />";
  }
  
  $zapytanie1 = "SELECT * FROM listanapojow";
  $wyn = $conn1->query($zapytanie1);
  $flaga = true;
  $tab = array();
  
 while($row = $wyn->fetch_assoc())
 { 
	array_push($tab, intval($row["Ilosc"]));
 }
 if($tab[0]<intval($Napoj1Ilosc)) $flaga = false;
 else if($tab[1]<intval($Napoj2Ilosc)) $flaga = false;
 else if($tab[2]<intval($Napoj3Ilosc)) $flaga = false;
 else if($tab[3]<intval($Napoj4Ilosc)) $flaga = false;
  $conn1->close();
  
  if($flaga==true)
  {
	  
		$conn = new mysqli($ip, $user, $pswd, $db);
		if($conn->connect_error)
		{
			echo "Wystąpił problem z połączeniem z bazą danych !" ;
			echo "<br />";
		 }

		 $zapytanie = "INSERT INTO zamowienia (Napoj1, Napoj1Ilosc, Napoj2, Napoj2Ilosc, Napoj3, Napoj3Ilosc, Napoj4, Napoj4Ilosc) VALUES ('$Napoj1','$Napoj1Ilosc','$Napoj2','$Napoj2Ilosc','$Napoj3','$Napoj3Ilosc','$Napoj4','$Napoj4Ilosc');";
		 $zapytanie .= "UPDATE listanapojow SET Ilosc = CASE WHEN id = 1 THEN Ilosc - '$Napoj1Ilosc' WHEN id = 2 THEN Ilosc - '$Napoj2Ilosc' WHEN id = 3 THEN Ilosc - '$Napoj3Ilosc' WHEN id = 4 THEN Ilosc - '$Napoj4Ilosc' END;";
		 if($conn->multi_query($zapytanie))
		 {
			echo "Dodano nowe wartosci";
		 }
		 else
		 {
			echo "Wystapil blad";
		 }
		 $conn->close();

  }
  else
  {
	echo "duzo";
	die();
  }
	 
  
?>

