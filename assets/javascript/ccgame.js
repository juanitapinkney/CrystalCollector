$( "img" ).ready( "wallpaper2.jpg" )


// Global variables

var mysteryNumber;
var rainbow;
var amethyst;
var peridot;
var diamond;


// Function

$(document).ready(function(){

$('#rainbow').click(function(){
addition = addition + rainbow;
logic();
})

$('#amethyst').click(function(){
addition = addition + amethyst;
logic();
})

$('#peridot').click(function(){
addition = addition + crystals2;
logic();
})

$('#diamond').click(function(){
addition = addition + diamond;
logic();
})
});


// Initiate game

gameInit();

function storevariablecrystal()

{

var crystals = [ "rainbow", "amethyst", "peridot", "diamond"];

arrayCopier (crystals);

}

function arrayCopier() {

	for (var i = 0; i < crystals.length; i++) {

		newNumber.push(arrayCopier[i]);
	}
	console.log(arrayCopier)
	console.log(newNumber)
}

storeVariableCrystals ();

// Crystal variables and values

var crystals = {
	rainbow: {
		name: "rainbow",
		value: 0
	}

	amethyst {
		name: "amethyst",
		value: 0
	}

	peridot {
		name: "peridot",
		value: 0
	}

	diamond {
		name: "diamond",
		value: 0
	}
};


// Players current and target scores

var wins = 0;
var losses = 0;

// Wins and Losses

var winCount = 0;
var lossCount = 0;

// Calls button by id

var button = document.getElementById("rainbow");
var button = document.getElementById("amethyst");
var button = document.getElementById("peridot");
var button = document.getElementById("diamond");


// Assigns random value to crystals from 1-12

var rainbow = Math.floor((Math.random()* 12) + 1);
var amethyst = Math.floor((Math.random()* 12) + 1);
var peridot = Math.floor((Math.random()* 12) + 1);
var diamond = Math.floor((Math.random()* 12) + 1);

// Selects a random number from 19 to 120

var total = Math.floor((Math.random()* 100) + 19);

function myButton() {

}


// Updates addition in html

var updateAddition = function (){
$('.addition').empty();
$('.addition').append(addition);
$('#wins').empty();
$('#wins').append(wins);
$('#losses').empty();
$('#losses').append(losses);
}

// Restart function

var restart = function(){
addition = 0;
total = Math.floor((Math.random()* 100) + 19);

$('.total').empty();
$('.total').append(total);


alert('restart');
updateAddition();
}
var logic = function (){
if (addition == total) {
wins = wins + 1;

audio.play();
restart();
}else if(addition > total){
losses = losses + 1;

audio.play();
restart();
}
else {
updateAddition();
}
}

$('.total').append(total);

$('.addition').append(addition);

