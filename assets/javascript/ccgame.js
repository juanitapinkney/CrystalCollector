	$( document ).ready(function(){
	  var Random=Math.floor(Math.random()*101+19)
	  // Selects a random number to be shown at the start of the game
	  // Number should be should be between 19 - 120
	  //

	  $('#randomNumber').text(Random);
	  // Appending random number to the randomNumber id in the html doc
	  //

	  var rainbow= Math.floor(Math.random()*11+1)
	  var amethyst= Math.floor(Math.random()*11+1)
	  var peridot= Math.floor(Math.random()*11+1)
	  var diamond= Math.floor(Math.random()*11+1)
	  // Setting up random numbers for each jewel
	  // Random number has to be between 1 - 12
	  // 

	  var userTotal= 0; 
	  var wins= 0;
	  var losses = 0;
	  //  Decaring variables for tallies
	  // 

		$('#numberWins').text(wins);
		$('#numberLosses').text(losses);
		//resets the game
		// 

		function reset(){
		      Random=Math.floor(Math.random()*101+19);
		      console.log(Random)
		      $('#randomNumber').text(Random);
		      rainbow= Math.floor(Math.random()*11+1);
		      amethyst= Math.floor(Math.random()*11+1);
		      peridot= Math.floor(Math.random()*11+1);
		      diamond= Math.floor(Math.random()*11+1);
		      userTotal= 0;
		      $('#finalTotal').text(userTotal);
		      } 
		//adds the wins to the userTotal
		// 

		function yay(){
		alert("You won!");
		  wins++; 
		  $('#numberWins').text(wins);
		  reset();
		}
		//addes the losses to the userTotal
		// 

		function loser(){
		alert ("You lose!");
		  losses++;
		  $('#numberLosses').text(losses);
		  reset()
		}
		//sets up click for jewels
		// 

		  $('#rainbow').on ('click', function(){
		    userTotal = userTotal + rainbow;
		    console.log("New userTotal= " + userTotal);
		    $('#finalTotal').text(userTotal); 
		//sets win/lose conditions
		// 

		        if (userTotal == Random){
		          yay();
		        }
		        else if ( userTotal > Random){
		          loser();
		        }   
		  })  
		  $('#amethyst').on ('click', function(){
		    userTotal = userTotal + amethyst;
		    console.log("New userTotal= " + userTotal);
		    $('#finalTotal').text(userTotal); 
		        if (userTotal == Random){
		          yay();
		        }
		        else if ( userTotal > Random){
		          loser();
		        } 
		  })  
		  $('#peridot').on ('click', function(){
		    userTotal = userTotal + peridot;
		    console.log("New userTotal= " + userTotal);
		    $('#finalTotal').text(userTotal);
		//sets win/lose conditions
		// 

		          if (userTotal == Random){
		          yay();
		        }
		        else if ( userTotal > Random){
		          loser();
		        } 
		  })  
		  $('#diamond').on ('click', function(){
		    userTotal = userTotal + diamond;
		    console.log("New userTotal= " + userTotal);
		    $('#finalTotal').text(userTotal); 
		      
		          if (userTotal == Random){
		          yay();
		        }
		        else if ( userTotal > Random){
		          loser();
		        }
		  });   
		}); 