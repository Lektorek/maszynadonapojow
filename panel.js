var blokada = 0;//zabezpieczenie przed zapisem więcej niż 6 jednostek napoju
var rob_diva="";//szufladka na stringa z divami odpowiadającymi jednostkom napoju

var napoj_1_ilosc = 0;//szufladka z ilością napoju nr1
var napoj_1_numer=0;//sztuczne nadanie numeru id dla napoju nr1

var napoj_2_ilosc = 0;//szufladka z ilością napoju nr2
var napoj_2_numer=10;//sztuczne nadanie numeru id dla napoju nr2

var napoj_3_ilosc = 0;//szufladka z ilością napoju nr3
var napoj_3_numer=20;//sztuczne nadanie numeru id dla napoju nr3

var napoj_4_ilosc = 0;//szufladka z ilością napoju nr4
var napoj_4_numer=30;//sztuczne nadanie numeru id dla napoju nr4

var zapis="";
var numer_zapisu=40;

var ikona="";

var wsk=0;
var limit=4;

var kontrola_nazw=new Array();

document.onload = new function()
{
	$.ajax({
		type: "GET",
		url: "pokaz_json.php",
		dataType: "json",
		success: function(data)
		{
			var tab = JSON.parse(JSON.stringify(data));
			
			for(var i=0; i<tab.length; i++)
			{
				q = tab[i].Napoj1Ilosc;
				w = tab[i].Napoj2Ilosc;
				e = tab[i].Napoj3Ilosc;
				r = tab[i].Napoj4Ilosc;
				
				ikona = ikona + '<div class="zapisane_zamowienie" id="' + i + 'z" onclick="realizuj_zamowienie('+q+','+w+','+e+','+r+')">' + tab[i].NazwaKompozycji +'</div>';
				var temp = tab[i].NazwaKompozycji;
				kontrola_nazw.push(temp);
			}

			document.getElementById("kontener_kompozycji").innerHTML = ikona;
			show();
		}
	});
}
//pobranie z zapisanej kompozycji wartosci i umieszczenie ich w kubku
function realizuj_zamowienie(a, b, c, d)//kolejne wartosci do odpowiednich napojow
{
	anuluj();//wyczyszczenie kubka
	for(i=0; i<a;i++)
	{
		napoj_1_plus();//wywołanie funkcji dodającej 1 jednostkę napoju tyle razy ile jest w zapisanej kompozycji
	}
	for(i=0; i<b;i++)
	{
		napoj_2_plus();//wywołanie funkcji dodającej 1 jednostkę napoju tyle razy ile jest w zapisanej kompozycji
	}
	for(i=0; i<c;i++)
	{
		napoj_3_plus();//wywołanie funkcji dodającej 1 jednostkę napoju tyle razy ile jest w zapisanej kompozycji
	}
	for(i=0; i<d;i++)
	{
		napoj_4_plus();//wywołanie funkcji dodającej 1 jednostkę napoju tyle razy ile jest w zapisanej kompozycji
	}
}

document.onselectstart=new Function('return false');

//pokazanie guzików dopiero po dodaniu przynajmniej 1 jednostki do zamówienia
function ukryj_pokaz_guziki()
{
	if(blokada==1)
	{
		$("#kontener_guziki").fadeIn(300);
	}
	if(blokada==0)
	{
		$("#kontener_guziki").fadeOut(300);
	}
}
//DODAWANIE NAPOJU
function napoj_1_plus()
{
	if(blokada < 6)//kontrola przekroczenia 6 jednostek
	{
		napoj_1_ilosc++;//szufladkowanie ilości napoju nr 1
		blokada++;//zmiana ogólniej ilości jednostek wszystkich napojów
		napoj_1_numer++;//inkrementacja id dla napoju nr1
		rob_diva = rob_diva+'<div class="blok_zamowienia" id="'+napoj_1_numer+'" style="background:red;">'+'</div>';//tworzenie jednostki w kubku
		document.getElementById("napoj_1_licznik").innerHTML = napoj_1_ilosc;//zmiana cyfry przy napoju 1 na reprezentację aktualnego stanu zamówienia 
		document.getElementById("kubek").innerHTML = rob_diva;//update kubka
	}
	ukryj_pokaz_guziki();//ukrycie przycisków
}

function napoj_1_minus()
{
	if(blokada <= 6)//kontrola przekroczenia 6 jednostek
	{
		if(napoj_1_ilosc > 0)//kontrola przed usuwaniem nie istniejącego obiektu
		{
			$('#'+napoj_1_numer).remove();//usunięcie(ukrycie) pierwszego elementu z kubka który odpowiada wybranej dekrementacji napoju
			napoj_1_ilosc--;//zmiejszenie ilości jednostek wybranego napoju
			blokada--;//zmiejszenie ogólnej liczby jednostek z wszystkich napojów
			document.getElementById("napoj_1_licznik").innerHTML = napoj_1_ilosc;//zmiana licznika przy napoju
			rob_diva = rob_diva.replace('<div class="blok_zamowienia" id="'+napoj_1_numer+'" style="background:red;">'+'</div>', "");//usunięcie diva w kubku po wcześniejszym ukryciu
			napoj_1_numer--;//zmiana id o -1
		}
	}
	ukryj_pokaz_guziki();
}


//DODAWANIE I ODEJMOWANIE DRUGIEGO NAPOJU
function napoj_2_plus()
{
	if(blokada < 6)
	{
		napoj_2_ilosc++;
		blokada++;
		napoj_2_numer++;
		rob_diva= rob_diva+'<div class="blok_zamowienia" id="'+napoj_2_numer+'" style="background:green;">'+'</div>';
		document.getElementById("napoj_2_licznik").innerHTML = napoj_2_ilosc;
		document.getElementById("kubek").innerHTML = rob_diva;
		
	}
	
	ukryj_pokaz_guziki();
}


function napoj_2_minus()
{
	if(blokada <= 6)
	{
		if(napoj_2_ilosc > 0)
		{
			$('#'+napoj_2_numer).remove();
			napoj_2_ilosc--;
			blokada--;
			document.getElementById("napoj_2_licznik").innerHTML = napoj_2_ilosc;
			rob_diva = rob_diva.replace('<div class="blok_zamowienia" id="'+napoj_2_numer+'" style="background:green;">'+'</div>', "");
			napoj_2_numer--;
		}
	}
	ukryj_pokaz_guziki();
}


//DODAWANIE I ODEJMOWANIE TRZECIEGO NAPOJU
function napoj_3_plus()
{
	if(blokada < 6)
	{
		napoj_3_ilosc++;
		blokada++;
		napoj_3_numer++;
		rob_diva= rob_diva+'<div class="blok_zamowienia" id="'+napoj_3_numer+'" style="background:orange;">'+'</div>';
		document.getElementById("napoj_3_licznik").innerHTML = napoj_3_ilosc;
		document.getElementById("kubek").innerHTML = rob_diva;
		
	}
	
	ukryj_pokaz_guziki();
}


function napoj_3_minus()
{
	if(blokada <= 6)
	{
		if(napoj_3_ilosc > 0)
		{
			$('#'+napoj_3_numer).remove();
			napoj_3_ilosc--;
			blokada--;
			document.getElementById("napoj_3_licznik").innerHTML = napoj_3_ilosc;
			rob_diva = rob_diva.replace('<div class="blok_zamowienia" id="'+napoj_3_numer+'" style="background:orange;">'+'</div>', "");
			napoj_3_numer--;
		}
	}
	ukryj_pokaz_guziki();
}


//DODAWANIE I ODEJMOWANIE CZWARTEGO NAPOJU
function napoj_4_plus()
{
	if(blokada < 6)
	{
		napoj_4_ilosc++;
		blokada++;
		napoj_4_numer++;
		rob_diva= rob_diva+'<div class="blok_zamowienia" id="'+napoj_4_numer+'" style="background:grey;">'+'</div>';
		document.getElementById("napoj_4_licznik").innerHTML = napoj_4_ilosc;
		document.getElementById("kubek").innerHTML = rob_diva;
	}
	
	ukryj_pokaz_guziki();
}


function napoj_4_minus()
{
	if(blokada <= 6)
	{
		if(napoj_4_ilosc > 0)
		{
			$('#'+napoj_4_numer).remove();
			napoj_4_ilosc--;
			blokada--;
			document.getElementById("napoj_4_licznik").innerHTML = napoj_4_ilosc;
			rob_diva = rob_diva.replace('<div class="blok_zamowienia" id="'+napoj_4_numer+'" style="background:grey;">'+'</div>', "");
			napoj_4_numer--;
		}
	}
	ukryj_pokaz_guziki();
}

var xxx = document.getElementsByClassName("zapisane_zamowienie");

//LISTA KOMPOZYCJI
function show()//wczytanie pierwszych 4 kompozycji
{
	xxx[wsk+"z"].style.display="block";//0
	
	wsk++;
	xxx[wsk+"z"].style.display="block";//1
	wsk++;
	xxx[wsk+"z"].style.display="block";//2
	wsk++;
	xxx[wsk+"z"].style.display="block";//3
}
var indx=0;

function scroll()
{
	for(var i=0; i < kontrola_nazw.length;i++)
	{
		$( "#"+i+"z" ).fadeOut(0);
	}
	$( "#"+indx+"z" ).fadeIn(300);
	indx+=1;
	$( "#"+indx+"z" ).fadeIn(300);
	indx+=1;
	$( "#"+indx+"z" ).fadeIn(300);
	indx+=1;
	$( "#"+indx+"z" ).fadeIn(300);
	indx-=2;
	if(indx==kontrola_nazw.length-3)
	{
		indx=0;
	}
	setTimeout(function(){ 

        scroll();
    }, 3000); 
}
function up()
{	
	if(window.innerWidth<=1000)//zmiana na osiach Y/X przy responsywności
	{
		wsk++;
		$( "#"+wsk+"z" ).toggle(300);//w sumie to nie pamiętam jak to ma działać całe...
		wsk-=4;
		$( "#"+wsk+"z" ).toggle(300);//chodzi o to, że po wczytaniu usuwamy i pokazujemy w zależności od ruchu góra/dół
		wsk+=4;//2
	}else{
		wsk++;
		$( "#"+wsk+"z" ).slideToggle();//na liczbach to będzie tak: 0,1,2,3 i teraz 0 się chowa a 4 pokazuje i na odwrót
		wsk-=4;
		$( "#"+wsk+"z" ).slideToggle();//ta zmienna wsk to niby wskaźnik na szufladkę, zmienia się odpowiednio żeby chować skrają szufladkę
		wsk+=4;//i pokazywać inną przeciwną szufladkę, a potem wrócić do pozycji początkowej na pierwszą szufladkę od góry. Coś takiego to miało być i działa XD
	}
}
function down()
{
	if(wsk>3)
	{
		if(window.innerWidth<=1000)
		{
			$( "#"+wsk+"z" ).toggle(300);
			wsk-=4;
			$( "#"+wsk+"z" ).toggle(300);//$( "#"+wsk ).toggle( "slide" );
			wsk+=3;
		}else{
			$( "#"+wsk+"z" ).slideToggle();
			wsk-=4;
			$( "#"+wsk+"z" ).slideToggle();//$( "#"+wsk ).toggle( "slide" );
			wsk+=3;
		}
	}
}
function zamow_napoj()
{
	if(napoj_1_ilosc || napoj_2_ilosc || napoj_3_ilosc || napoj_4_ilosc > 0)//sprawdzamy czy lista napojów nie jest pusta
	{
		$.ajax({//Tomek ???
				type: "POST",
				url: "add_zamowienie.php",
				data: "Napoj1=" + "Cola" + "&Napoj1Ilosc=" + napoj_1_ilosc + "&Napoj2=" + "Sprite" + "&Napoj2Ilosc=" + napoj_2_ilosc + "&Napoj3=" + "Pomarancza" + "&Napoj3Ilosc=" + napoj_3_ilosc + "&Napoj4=" + "JackDaniels" + "&Napoj4Ilosc=" + napoj_4_ilosc,
				success: function(data)
				{
					if(data == "duzo")
					{
						alert("Brak odpowiednich napojow w bazie, uzupelnij w magazynie");
					}
				}
		});
		blokada = 0;//Zerujemy ogólny licznik
		ukryj_pokaz_guziki();//chowamy guziki
		var temp1 = napoj_1_ilosc;
		var temp2 = napoj_2_ilosc;
		var temp3 = napoj_3_ilosc;
		var temp4 = napoj_4_ilosc;
		napoj_1_ilosc = 0;//zerujemy wszystkie dane
		napoj_1_numer=0;

		napoj_2_ilosc = 0;
		napoj_2_numer=10;

		napoj_3_ilosc = 0;
		napoj_3_numer=20;

		napoj_4_ilosc = 0;
		napoj_4_numer=30;

		document.getElementById("napoj_1_licznik").innerHTML = napoj_1_ilosc;
		document.getElementById("napoj_2_licznik").innerHTML = napoj_2_ilosc;
		document.getElementById("napoj_3_licznik").innerHTML = napoj_3_ilosc;
		document.getElementById("napoj_4_licznik").innerHTML = napoj_4_ilosc;//czyścimy liczniki

		 procenty_zamowienia(temp1, temp2, temp3, temp4);//uruchamiamy progress(jest do zmiany jeszcze)
		
	}
}
var flaga=0;//blokowanie dodania kolejnego zamówienia podczas pracy progresu/ możliwe usunięcie przy późnijszym etapie
function procenty_zamowienia(a,b,c,d)//JUST PROGRESS
{
	flaga=1;
	blokada=7;
	 $("#ptaszek").fadeOut(100); 
		$("#kolo").fadeIn(150);
		var czas = a+b+c+d;
		czas = czas * 1000;
		var timer = setInterval(function(){ $("#kolo").fadeOut(150);$("#ptaszek").fadeIn(150); clearInterval(timer); blokada=0; flaga=0; rob_diva=""; document.getElementById("kubek").innerHTML = rob_diva;}, czas);
}
function zapis_napoju()
{
	var spr_wartosci = document.getElementById("input_nazwy_zamowienia").value;//pobranie wart z inputa
	if(spr_wartosci != 0 && spr_wartosci.length <= 10)//blokada na 10 liter/znaków
	{	
		var kontrola=1;
		for(i=0;i<kontrola_nazw.length;i++)//tu ma spr czy nazwa już jest ale nie wiem czy to działa
		{
			if(spr_wartosci == kontrola_nazw[i])
			{
				kontrola=0;
				alert("Nazwa zajęta, sorry ;)");
			}
		}
		
		if(flaga==0 && kontrola == 1)//Tooooooomeeeeek ?????????
		{
			document.getElementById("input_nazwy_zamowienia").value = "";
			$.ajax({
				type: "POST",
				url: "add_kolejka.php",
				data: "NKompozycji=" + xssFilters.inHTMLData(spr_wartosci) + "&Napoj1=" + "Cola" + "&Napoj1Ilosc=" + napoj_1_ilosc + "&Napoj2=" + "Sprite" + "&Napoj2Ilosc=" + napoj_2_ilosc + "&Napoj3=" + "Pomarancza" + "&Napoj3Ilosc=" + napoj_3_ilosc + "&Napoj4=" + "JackDaniels" + "&Napoj4Ilosc=" + napoj_4_ilosc,
				success: function(data)
				{
					
				}
			});
		}
	}else alert("Nie podales nazwy kompozycji lub nazwa jest dluzsza niz 10 znakow");
}

function anuluj()//Czyści wszystkie dane na panelu
{
	if(flaga==0)
	{
		blokada = 0;
		rob_diva="";
		ukryj_pokaz_guziki();
		napoj_1_ilosc = 0;
		napoj_1_numer=0;

		napoj_2_ilosc = 0;
		napoj_2_numer=10;

		napoj_3_ilosc = 0;
		napoj_3_numer=20;

		napoj_4_ilosc = 0;
		napoj_4_numer=30;

		document.getElementById("napoj_1_licznik").innerHTML = napoj_1_ilosc;
		document.getElementById("napoj_2_licznik").innerHTML = napoj_2_ilosc;
		document.getElementById("napoj_3_licznik").innerHTML = napoj_3_ilosc;
		document.getElementById("napoj_4_licznik").innerHTML = napoj_4_ilosc;

		document.getElementById("kubek").innerHTML = rob_diva;
	}
}

