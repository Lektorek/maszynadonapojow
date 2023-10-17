<?php

	session_start();
	if($_SESSION["zalogowany"] == false)
	{
		header("Location: index.html");
		exit();
	}
	

	$ip = "localhost";
	$username = "root";
	$password = "";

	$tablica = array();
	$conn = new mysqli($ip, $username, $password, "maszyna");
	if($conn->connect_error)
	{
		echo "Problem z polaczeniem z baza danych !";
	}

	$sql = "SELECT * FROM kompozycjenapojow INNER JOIN uzytkownicy ON kompozycjenapojow.IDusera = uzytkownicy.id WHERE uzytkownicy.id = " . $_SESSION["id_uzytkownika"] . ";";
	$wynik = $conn->query($sql);
	if($wynik->num_rows > 0)
	{
		while($row = $wynik->fetch_assoc())
		{
			$tablica[] = $row;
		}
	}

	echo json_encode($tablica);
	$conn->close();


?>
