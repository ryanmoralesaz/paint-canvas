
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var color = $(".selected").css("background-color");
var lastEvent;
var mouseDown = false;
$(".controls").on("click", "li", function(){
   
  $(this).siblings().removeClass("selected");
$(this).addClass("selected");

   color = $(this).css("background-color");

 });

$("#revealColorSelect").click(function(){
	changeColor();
	resetSliders();

	if (!($("#newColor").css("background-color", "rgb(0,0,0)"))) {
		$("#newColor").css("background-color", "rgb(0,0,0)");
	}
	$("#colorSelect").toggle();
	$("input[type=range]").reset();
	
});
function resetSliders() {
	$("input[type=range]").val(0);

}
function changeColor() {
	var r = $("#red").val();
	var g = $("#green").val();
	var b =$("#blue").val();
	$("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

$("input[type=range]").on("input", changeColor);


$("#addNewColor").on("click", function() {
	var $newColor = $("<li></li>");
	$newColor.css("background-color", $("#newColor").css("background-color"));
	$(".controls ul").append($newColor);
	
})
$canvas.mousedown(function(e) {
	lastEvent = e;
	mouseDown = true;
}).mousemove(function(e){

if (mouseDown) {
context.beginPath();
context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
context.lineTo(e.offsetX, e.offsetY);
context.strokeStyle = color;
context.stroke();

lastEvent = e;
}
}).mouseup(function() {
	mouseDown = false;
}).mouseleave(function(){

	$canvas.mouseup();
})



