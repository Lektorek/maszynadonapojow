var Napoj = "";

function uzupelnij(a)
{
  switch(a)
  {
    case 1:
      Napoj = "Cola";
    break;

    case 2:
      Napoj = "Sprite";
    break;

    case 3:
      Napoj = "Pomarancza";
    break;

    case 4:
      Napoj = "JackDaniels";
    break;
  }
  var Ilosc = document.getElementById(a).value;
  document.getElementById(a).value = "";

  $.ajax({
		type: "POST",
		url: "uzupelnij.php",
		data: "Napoj=" + Napoj + "&Ilosc=" + Ilosc,
		success: function(data)
		{
        
		}
	});

}
