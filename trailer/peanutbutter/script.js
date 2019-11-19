var bam = $("audio")[0];
var pbj = $("audio")[1];
var button1Wrapper = $(".button1Wrapper");
var button1 = $(".button1");
var button2Wrapper = $(".button2Wrapper");
var button2 = $(".button2");
var body = $("body");

button1Wrapper.click(function() {
  button1.addClass("active");
  body.addClass("bam");
  bam.play();
  $(".numbers").hide();
  
  bam.addEventListener("ended", function() {
    button1.removeClass("active");
    body.removeClass("bam");
    $(".numbers").show();
  });
});

button2Wrapper.click(function() {
  button2.addClass("active");
  body.addClass("pbj");
  pbj.play();
  $(".numbers").hide();

  pbj.addEventListener("ended", function() {
    button2.removeClass("active");
    body.removeClass("pbj");
    $(".numbers").show();

  });
});