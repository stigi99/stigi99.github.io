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
