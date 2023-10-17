function pokaz_kafle()
{
	$("#k1").fadeIn(800);
	$("#k2").fadeIn(800);
	$("#banner").fadeIn(800);
}
function powieksz_1()
{
	$("#k1").animate({
			width:"520px",
			height:"520px",
			marginLeft:"290px",
			marginTop:"240px",
			lineHeight:"520px;",
        },300);
		
		$("#k2").animate({
			marginLeft:"290px",
        },300);
}

function pomniejsz_1()
{
	$("#k1").animate({
			width:"500px",
			height:"500px",
			marginLeft:"300px",
			marginTop:"250px",
				lineHeight:"500px;",
        },300);
		$("#k2").animate({
			marginLeft:"300px",
        },300);
}
function powieksz_2()
{
	$("#k2").animate({
			width:"520px",
			height:"520px",
			marginLeft:"290px",
			marginTop:"240px",
				lineHeight:"520px;",
        },300);
		
		$("#k1").animate({
			marginLeft:"300px",
        },300);
}

function pomniejsz_2()
{
	$("#k2").animate({
			width:"500px",
			height:"500px",
			marginLeft:"300px",
			marginTop:"250px",
				lineHeight:"500px;",
        },300);
		$("#k1").animate({
			marginLeft:"300px",
        },300);
}
function zamknij_ekran()
{
	$("#guzik_logowania").animate({
            color: "#dddddd",
			letterSpacing: '0px',
			width:"120px",
        },0);
	$("#tlo_logowania").fadeOut(300);
	$("#guzik_logowania").fadeIn(200);
	$("#zamknij_tlo_i_ekran").fadeOut(300);
	$("#ekran_logowania").fadeOut(300);
}
function pokaz_ekran(a)
{
	if(a==1)
	{
		document.getElementById("grafika_ekranu_logowania").innerHTML="Users";
	}else
	{
		document.getElementById("grafika_ekranu_logowania").innerHTML="Young Tech";
	}
	$("#guzik_logowania").animate({
            color: "#ffffff",
			letterSpacing: '3px',
			width:"150px",
        },300);
	$("#tlo_logowania").fadeIn(300);
	$("#guzik_logowania").fadeOut(200);
	$("#zamknij_tlo_i_ekran").fadeIn(300);
	$("#ekran_logowania").fadeIn(300);
}