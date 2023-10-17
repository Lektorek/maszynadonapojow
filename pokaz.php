<?php

	$ip = "localhost";
	$username = "root";
	$password = "";

	$conn = new mysqli($ip, $username, $password, "maszyna");
	if($conn->connect_error)
	{
		echo "Problem z polaczeniem z baza danych !";
	}

	$sql = "SELECT * FROM kompozycjenapojow";
	$wynik = $conn->query($sql);
	if($wynik->num_rows > 0)
	{
		while($row = $wynik->fetch_assoc())
		{
			echo "NazwaKompozycji: " . $row["nazwakompozycji"];
			echo "<br />";
			echo " | Napoj: " . $row["Napoj1"]. " Ilosc: " . $row["Napoj1Ilosc"] . " | Napoj: " . $row["Napoj2"]. " Ilosc: " . $row["Napoj2Ilosc"];
			echo "<br />";
			echo " | Napoj: " . $row["Napoj3"] . " Ilosc: " . $row["Napoj3Ilosc"] . " |Napoj: " . $row["Napoj4"] . " Ilosc: " . $row["Napoj4Ilosc"];
			echo "<br />";
			echo "-------------------------------------------";
			echo "<br />";
		}
	}
$conn->close();


?>
