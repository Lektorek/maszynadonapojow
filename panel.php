<!--
<?php

	session_start();
	if($_SESSION["zalogowany"] == false)
	{
		header("Location: index.html");
	}
	else if($_SESSION["zalogowany"] == true)
	{
		
	}
	else
	{
		header("Location: index.html");
	}

?>
-->
<html lang="pl">

	<head>

			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<link rel="stylesheet" type="text/css" href="panel.css" />
			<link rel="stylesheet" href="css/animation.css">
			<link rel="stylesheet" href="css/fontello.css">
			<script src="jq3.1.1.js"></script>
			<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
			<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
			<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
			<script src="xss-filters-master/dist/xss-filters.min.js"></script>
			<script src="panel.js"></script>
			

	</head>
	
	

	<body>
		
		<div id="kontener">
			
			<div id="menu">
			
				<!-- Pierwszy box z napojem-->

							<div class="napoje">

									<div class="kontener_guziki">

											<div class="guzik_plus" onclick="napoj_1_plus()">
												<b>+</b>
											</div>

											<div class="pole_textowe" id="napoj_1_licznik"><!--czy to działa ?-->
												0
											</div>

											<div class="guzik_minus" onclick="napoj_1_minus()"><!--ODEJMIJ JEDNO NALANIE-->
												<b>-</b>
											</div>

									</div>

									<div class="grafika_napoju" id="graf_1">
										
											<img src="napoj1.png" style="width:100%; height:100%;"/>
										
									</div>

							</div>

						<!-- Drugi box z napojem-->

							<div class="napoje">

									<div class="kontener_guziki">

											<div class="guzik_plus" onclick="napoj_2_plus()">
												<b>+</b>
											</div>

											<div class="pole_textowe" id="napoj_2_licznik">
												0
											</div>

											<div class="guzik_minus" onclick="napoj_2_minus()">
												<b>-</b>
											</div>

									</div>

									<div class="grafika_napoju" id="graf_2">
									
											<img src="napoj2.png" style="width:100%; height:100%;"/>
									
									</div>

							</div>

						<!-- Trzeci box z napojem-->

							<div class="napoje">

									<div class="kontener_guziki">

											<div class="guzik_plus" onclick="napoj_3_plus()">
												<b>+</b>
											</div>

											<div class="pole_textowe" id="napoj_3_licznik">
												0
											</div>

											<div class="guzik_minus" onclick="napoj_3_minus()">
												<b>-</b>
											</div>

									</div>

									<div class="grafika_napoju" id="graf_3">
									
											<img src="napoj3.png" style="width:100%; height:100%;"/>
									
									</div>

							</div>

						<!-- Czwarty box z napojem-->

							<div class="napoje">

									<div class="kontener_guziki">

											<div class="guzik_plus" onclick="napoj_4_plus()">
												<b>+</b>
											</div>

											<div class="pole_textowe" id="napoj_4_licznik">
												0
											</div>

											<div class="guzik_minus" onclick="napoj_4_minus()">
												<b>-</b>
											</div>

									</div>

									<div class="grafika_napoju" id="graf_4">
									
											<img src="napoj4.png" style="width:100%; height:100%;"/>
									
									</div>

							</div>
							
							
							<div id="stan_zamowienia">
								
									<div id="kolo">
									
											<i class="demo-icon icon-spin6 animate-spin"></i>
											
									</div>
								
									<div id="ptaszek">
											
											<i class="demo-icon icon-ok"></i>
											
									</div>
							
							</div>
			
			</div>
			
			<div id="kontener_lewy">
			
					<div id="kontener_guziki">
						
						<div class="guziki_zamowienia" onclick="zamow_napoj()">
								
								Zamów
								
						</div>
						
						<div class="guziki_zamowienia" onclick="zapis_napoju()">
						
								Zapisz
						
						</div>
						
						<div class="guziki_zamowienia" onclick="anuluj()">
						
								Anuluj
						
						</div>
						
						<input type="text" id="input_nazwy_zamowienia" placeholder=" Wpisz nazwę"onfocus="this.placeholder=''" onblur="this.placeholder=' Wpisz nazwę'" />
						
					</div>
					<!-- UWAGA TU SIĘ COŚ ODJEBIE-->
					<div id="grafika_zamowienia">
					
							<div id="kubek">
							</div>
					
					</div>
				
					<div id="pasek_logowania"><a href="logout.php" style="text-decoration: none; color: white;">
							<?php
								#session_start();
								echo "Zalogowany jako: ". $_SESSION["nazwa_uzytkownika"];
							?>
					</a>
					</div>
			
			</div>
			
			<div id="kontener_prawy">
					
					<div id="strzalka_gora" onclick="down()">
						
						
					</div>
					
					<div id="kontener_kompozycji">

					</div>
					
					<div id="strzalka_dol" onclick="up()">
					
					
					</div>
					
			</div>
			
		</div>
	
	</body>
	
</html>
