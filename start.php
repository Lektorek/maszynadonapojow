<?php

	session_start();
	if($_SESSION["zalogowany"] == false)
	{
		header("Location: index.html");
		exit();
	}
	else if($_SESSION["admin"] == false)
	{
		header("Location: panel.php");
	}

?>

<html lang="pl">
	
		<head>
		
				<meta charset="utf-8">
				<link rel="stylesheet" type="text/css" href="start.css" />
				<script src="jq3.1.1.js"></script>
				<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
				<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
				<script src="start.js"></script>
		
		</head>
		
		<body>
			
				<div id="banner">
				Pomoc Techniczna - maszyna do napojów
				</div>
			
				<div id ="kontener">
					<a href="panel.php">
						<div class="kafelek"  id="k1" onclick="pokaz_ekran(1)">
							Panel
						</div>
					</a>
					<a href="magazyn.php">
						<div class="kafelek"  id="k2" onclick="pokaz_ekran(2)">
							Magazyn
						</div>
					</a>
					
				</div>
				
		</body>
	
</html>