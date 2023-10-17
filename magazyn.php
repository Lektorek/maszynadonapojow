<!--
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
-->

<html lang="pl">

		<head>

				<meta charset="utf-8">
				<link rel="stylesheet" type="text/css" href="magazyn_style.css" />
				<script src="jq3.1.1.js"></script>
				<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
				<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
				<script src="magazyn.js"></script>

		</head>

		<body>

			<div id="kontener">

            <div class="szachownica">

              <div class="grafika_napoju" id="graf_1">
			  <img src="napoj1.png" style="width:100%; height:100%;"/>
              </div>
	      <div class="stan_produktu">
              </div>

                <input type="text" placeholder=" Nalej Coli"onfocus="this.placeholder=''" onblur="this.placeholder=' Nalej Coli'" class="input" id="1"> <br />

                <input type="button" value="Uzupełnij" id="uzupełnij_guzik" onclick="uzupelnij(1)">


            </div>

          <div class="szachownica">

              <div class="grafika_napoju" id="graf_2">
			  <img src="napoj2.png" style="width:100%; height:100%;"/>
              </div>
	      <div class="stan_produktu">
              </div>


                <input type="text" placeholder=" Nalej Sprita"onfocus="this.placeholder=''" onblur="this.placeholder=' Nalej Sprita'" class="input" id="2" > <br />

                <input type="button" value="Uzupełnij" id="uzupełnij_guzik" onclick="uzupelnij(2)">

          </div>

          <div class="szachownica">

              <div class="grafika_napoju" id="graf_3">
			  <img src="napoj3.png" style="width:100%; height:100%;"/>
              </div>
	      <div class="stan_produktu">
              </div>


                <input type="text" placeholder=" Nalej Soku"onfocus="this.placeholder=''" onblur="this.placeholder=' Nalej Soku'" class="input" id="3" > <br />

                <input type="button" value="Uzupełnij" id="uzupełnij_guzik" onclick="uzupelnij(3)">

          </div>

          <div class="szachownica">

              <div class="grafika_napoju" id="graf_4">
			  <img src="napoj4.png" style="width:100%; height:100%;"/>
              </div>
	      <div class="stan_produktu">
              </div>

                <input type="text" placeholder=" Zaproś Jacka"onfocus="this.placeholder=''" onblur="this.placeholder=' Zaproś Jacka'" class="input" id="4"> <br />

                <input type="button" value="Uzupełnij" id="uzupełnij_guzik" onclick="uzupelnij(4)">

          </div>

          <div class="szachownica">

              <div class="grafika_napoju" id="graf_5">
             
	      </div>
	      <div class="stan_produktu">
              </div>

              

                  <input type="text" placeholder=" Dodaj Kubeczki"onfocus="this.placeholder=''" onblur="this.placeholder=' Dodaj Kubeczki'" class="input" > <br />

                  <input type="submit" value="Dodaj" id="uzupełnij_guzik">

              

          </div>

  				<div class="szachownica">

  								<form id="wyloguj_sie" action="logout.php" method="post">

  								          <input type="submit" value="Wyloguj" id="guzik"/>

                  </form>

  				</div>

				</div>

			</div>

		</body>

</html>
