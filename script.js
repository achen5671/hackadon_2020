var slider= document.getElementById("slider");
var slider2= document.getElementById("slider2");

var val=document.getElementById("value");
var val2=document.getElementById("value2");

val.innerHTML = slider.value;
val2.innerHTML = slider2.value;

slider.oninput = function(){
	val.innerHTML = this.value;
}
slider2.oninput = function(){
	val2.innerHTML = this.value;
}


