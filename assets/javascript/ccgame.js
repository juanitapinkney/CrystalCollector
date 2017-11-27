// Click Function

$(document).ready(function(){

	$('.rainbow').click(function(){
		Math.random = Math.random + rainbow;
		logic();
	})

	$('.amethyst').click(function(){
		Math.random = Math.random + amethyst;
		logic();
	})

	$('.peridot').click(function(){
		Math.random = Math.random + peridot;
		logic();
	})

	$('.diamond').click(function(){
		Math.random = Math.random + diamond;
		logic();
	})

})


// Assigns button by id

var button = document.getElementByClass("rainbow");
var button = document.getElementByClass("amethyst");
var button = document.getElementByClass("peridot");
var button = document.getElementByClass("diamond");

// Assigns random value to crystals from 1-12

var rainbow = Math.floor((Math.random()* 12) + 1);
var amethyst = Math.floor((Math.random()* 12) + 1);
var peridot = Math.floor((Math.random()* 12) + 1);
var diamond = Math.floor((Math.random()* 12) + 1);


// Game Function

function getRandomNumber () {
	on.click = Math.floor((Math.random() * 12) + 1);
	console.log ("Function Called")
}

getRandomNumber();


// Players current and target scores

var wins = 0;
var losses = 0;

// Wins and Losses

var winCount = 0;
var lossCount = 0;

function endGame() {
	if (win) {
		wins++;
	} else	{
		looses++;
}

$("#wins").text(wins);
$("#losses").text(losses);

}
