
var cards = ["1.jpg", "2.jpg", "3.jpg", "3.jpg", "4.jpg", "5.png", "2.jpg", "6.jpg", "1.jpg", "5.png", "6.jpg", "4.jpg"];

//alert(cards[4]);

//console.log(cards);

var $karta = $(".card");
//console.log($karta[2]);
$(".card").detach();
function losowanie(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
		a[j] = x;
$(".board").append(a);
    }
    return a;
}

losowanie($karta)

var c0 = $('#c0').click(function() { revealCard(0); });
var c1 = $('#c1').click(function() { revealCard(1); });
var c2 = $('#c2').click(function() { revealCard(2); });
var c3 = $('#c3').click(function() { revealCard(3); });

var c4 = $('#c4').click(function() { revealCard(4); });
var c5 = $('#c5').click(function() { revealCard(5); });
var c6 = $('#c6').click(function() { revealCard(6); });
var c7 = $('#c7').click(function() { revealCard(7); });

var c8 = $('#c8').click(function() { revealCard(8); });
var c9 = $('#c9').click(function() { revealCard(9); });
var c10 = $('#c10').click(function() { revealCard(10); });
var c11 = $('#c11').click(function() { revealCard(11); });


var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 6;

function revealCard(nr)
{
	var opacityValue = $('#c'+nr).css('opacity');
	
	//alert('Opacity: '+opacityValue);
	
	if (opacityValue != 0 && lock == false && nr != visible_nr )
	{
		lock = true;
		
		//alert(nr);
	
		var obraz = "url(img/" + cards[nr] + ")";
		
		$('#c'+nr).css('background-image', obraz);
		$('#c'+nr).addClass('cardA');
		$('#c'+nr).removeClass('card');
		
		if(oneVisible == false)
		{
			//first card
			
			oneVisible = true;
			visible_nr = nr;
			lock = false;
		}
		else
		{
			//second card
			
			if(cards[visible_nr] == cards[nr])
			{
				//alert("para");
				
				setTimeout(function() { hide2Cards(nr, visible_nr) }, 750);
				
			}
			else
			{
				//alert("pudło");
				
				setTimeout(function() { restore2Cards(nr, visible_nr) }, 1000);
			}
			
			turnCounter++;
			$('.score').html('Licznik tur: '+turnCounter);
			oneVisible = false;
		}
		
	}
	
}

function hide2Cards(nr1, nr2)
{
	$('#c'+nr1).css('opacity', '0');
	$('#c'+nr2).css('opacity', '0');
	
	pairsLeft--;
	
	if(pairsLeft == 0)
	{
		$('.board').html('<h1>Wygrałeś jesteś mistrzem zsti<br>Zajeło Ci to '+turnCounter+' tur</h1>');
	}
	
	lock = false;
}

function restore2Cards(nr1, nr2)
{
	$('#c'+nr1).css('background-image', 'url(img/karta.png)');
	$('#c'+nr1).addClass('card');
	$('#c'+nr1).removeClass('cardA');	

	$('#c'+nr2).css('background-image', 'url(img/karta.png)');
	$('#c'+nr2).addClass('card');
	$('#c'+nr2).removeClass('cardA');
	
	lock = false;
}

