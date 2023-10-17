<?php

  session_start();
  if((!isset($_POST["user"])) && (!isset($_POST["pass"])))
  {
		header("Location: index.html");
		exit();
  }

	$ip = "localhost";
	$username = "root";
	$password = "";

	$conn = new mysqli($ip, $username, $password, "maszyna");
	$user = $_POST["user"];
	$pass = hash("sha256", $_POST["pass"]);

	$sql = "SELECT * FROM uzytkownicy WHERE user='$user' AND pass='$pass'";
	$wynik = $conn->query($sql);
	$a = $wynik->num_rows;
	$row = $wynik->fetch_assoc();

  	if($a > 0)
  	{
		$_SESSION["id_uzytkownika"] = $row["id"];
		$_SESSION["nazwa_uzytkownika"] = $user;
    	$_SESSION["zalogowany"] = true;
		$_SESSION["admin"] = false;
		if($row["admin"] == 1)
		{
			$_SESSION["admin"] = true;
			header("Location: start.php");
		}
		else
		{
			$_SESSION["admin"] = false;
			header("Location: panel.php");
		}
  	}
  	else
  	{
      		header("Location: index.html");
  	}

?>
