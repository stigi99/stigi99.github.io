 function array()
 {
 var liczby =prompt("podaj liczby","1,2,3").split(",");
 var pierwszy = liczby[0];
 var ostatni =liczby[liczby.length-1];
 if (liczby.length%2==1){
 var srodek=liczby.length/2;
 srodek=Math.floor(srodek);
 document.getElementById("array").innerHTML="srodek wynosi "+liczby[srodek]+"pierwszy wyraz wynosi "+pierwszy+"ostatni wyraz wynosi "+ostatni;
 }
else {
var srodek=liczby.length/2;
var srodek1=srodek-1;
var srodek2=srodek;	
document.getElementById("array").innerHTML="srodek wynosi "+liczby[srodek1]+","+liczby[srodek2]+" pierwszy wyraz wynosi "+pierwszy+" ostatni wyraz wynosi "+ostatni;
}


 }




 function sinus(){
    var cos;
  var sin= prompt("Podaj sinusa",);

  sin= parseFloat(sin, 10);
  if (sin>=1 || isNaN(sin)){
  alert("podales zla liczbe")
}
else {
  cos = 1 - Math.pow(sin,2);
  cos = Math.sqrt(cos,2);
  alert ("cosinus wynosi "+cos);
}
}


function cosinus(){
  var sin;
  var cos = prompt("podaj cosinusa",cos);
  cos = parseFloat(cos,10);
  if (cos>=1 || isNaN(cos)){
alert ("podales zla liczbe")
  }
else {
  sin = 1 - Math.pow(cos,2);

  sin = Math.sqrt(sin,2);
  alert ("sinus wynosi "+sin);

}
}

function odlegloscpunkty(){
  var a1, a2, b1, b2, pkt;
  a1=prompt("podaj punkt a1 ", a1 );
    a2=prompt("podaj punkt a2 ", a2 );
  b1=prompt("podaj punkt b1", b1);
    b2=prompt("podaj punkt b2 ", b2 );
    a1=parseInt(a1,10);
    a2=parseInt(a2,10);
    b1=parseInt(b1,10);
    b2=parseInt(b2,10);

    pkt= Math.sqrt(Math.pow(b1-a1,2)+Math.pow(b2-a2,2));
    alert(pkt);
}

function srodektrojkata(){
  var a1, a2, b1, b2, x, y, pkt;
  a1=prompt("podaj punkt a1 ", a1 );
    a2=prompt("podaj punkt a2 ", a2 );
  b1=prompt("podaj punkt b1", b1);
    b2=prompt("podaj punkt b2 ", b2 );
    a1=parseInt(a1,10);
    a2=parseInt(a2,10);
    b1=parseInt(b1,10);
    b2=parseInt(b2,10);
    x = (a1+b1)/2
    y = (a2+b2)/2
    alert("srodek wynosi "+x + ","+ y)

}

function odlegloscpunktuprosta(){
  var a1, a2, a3, x, y, d ;
  a1=prompt("podaj punkt A ", a1 );
    a2=prompt("podaj punkt B ", a2 );
    a3=prompt("podaj punkt C ", a3 );
      x=prompt("podaj punkt X ", x );
      y=prompt("podaj punkt Y ", y );
      a1=parseInt(a1,10);
    a2=parseInt(a2,10);
    a3=parseInt(a3,10);
  x=parseInt(x,10);
    y=parseInt(y,10);
alert (a1, a2, a3, x, y)

    d=Math.abs((a1*x+a2*y+a3)/Math.sqrt(Math.pow(a1,2)+Math.pow(a2,2)))
alert(d)

}

function wzorherona(){

  var p, a, b, c, pole;
  a =prompt("prosta A", a)
  b =prompt("prosta B", b)
  c =prompt("prosta C", c)
  
   a= parseInt(a,10)
   b= parseInt(b,10)
   c= parseInt(c,10)
  p=(1/2)*(a+b+c)
  pole=Math.sqrl(p*(p-a)*(p-b)*(p-c))
  alert(pole)


}
var up = false,
    right = false,
    down = false,
    left = false,
    x = window.innerWidth/2-130/2,
    y = window.innerHeight/2-130/2
document.addEventListener('keydown',press)
function press(e){
  if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */){
    up = true
  }
  if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
    right = true
  }
  if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){
    down = true
  }
  if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */){
    left = true
  }
}
document.addEventListener('keyup',release)
function release(e){
  if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */){
    up = false
  }
  if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
    right = false
  }
  if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){
    down = false
  }
  if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */){
    left = false
  }
}
function gameLoop(){
  var div = document.querySelector('div')
  if (up){
    y = y - 10
  }
  if (right){
    x = x + 10
  }
  if (down){
    y = y + 10
  }
  if (left){
    x = x - 10
  }
  div.style.left = x+'px'
  div.style.top = y+'px'
  window.requestAnimationFrame(gameLoop)
}
window.requestAnimationFrame(gameLoop)

