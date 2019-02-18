$("h1").css("color", "red");

$(".section-1").css("background-color", "yellow");

console.log( $(".counter").text() );
a= parseInt( $(".counter").text() );
b=10;
$(".counter").text(a+b);

$("#row-3").click(function() {
  $("#row-3").css("background-color", "gray");
  $("#row-3").css("transition", "1s");
});

$(".section-1 > h1").css("font-size", "3em");

$("table tr:last-child").css("background-color", "red");
