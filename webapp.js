// JavaScript Document
var name = "";
//$(document).ready(function() { document.getElementById("spaceship").addEventListener("click", function()alert("You gained 3 items!"))};
function spaceship(room) {
	switch(room) {
		case "galley":
	
			break;
		case "cockpit":
			alert("this is the cockpit");
			break;
			
		case "engine":
			alert("this is the engine room");
			break;
	}
//story mode
}
function s(part) {
switch(part) {
	case "a":
	name = prompt("On this journey, our hero is stranded in their ship, the S.S. Galaxis. Every story needs a beginning, and every beginning needs a name. What is your name?");
	break;
	
}
}

//name
function n() {
	alert("Your name is " + name)
}

	//add clicker for resource
	var metal = 0;
function metal_collector() {
	metal ++;
	document.getElementById("metal").value = metal;
}

function move(loc) {
	switch(loc) {
		case "cockpit":
			// change image
			document.getElementById("spaceship").setAttribute("src", "images/cockpit.jpg");
			// change image map
			document.getElementById("spaceship").setAttribute("usemap", "#CockpitMap");
			break;
		case "galley":
		case "engine":
		case "space":
	}
}