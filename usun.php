<?php

	$id = $_GET["id"];
	
	$ip = "localhost";
	$user = "root";
	$pass = "";
	
	$conn = new mysqli($ip, $user, $pass, "maszyna");
	$sql = "DELETE FROM zamowienia WHERE id='$id'";
	$conn->query($sql);
	$conn->close();

?>
