$(document).ready(function() {
  var Random = Math.floor(Math.random() * 101 + 19)
  // Selects a random number to be shown at the start of the game
  // Number should be should be between 19 - 120
  //
  $('#randomNumber').text(Random);
  // Appending random number to the randomNumber id in the html doc
  //
  var marinecrystal = Math.floor(Math.random() * 11 + 1)
  var whitecrystal = Math.floor(Math.random() * 11 + 1)
  var bluecrystal = Math.floor(Math.random() * 11 + 1)
  var purplecrystal = Math.floor(Math.random() * 11 + 1)
  // Setting up random numbers for each crystal
  // Random number between 1 - 12
  // 
  var userTotal = 0;
  var wins = 0;
  var losses = 0;
  // Define variables for score count
  // 
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  //Rest game 
  // 
  function reset() {
    Random = Math.floor(Math.random() * 101 + 19);
    console.log(Random)
    $('#randomNumber').text(Random);
    marinecrystal = Math.floor(Math.random() * 11 + 1);
    whitecrystal = Math.floor(Math.random() * 11 + 1);
    bluecrystal = Math.floor(Math.random() * 11 + 1);
    purplecrystal = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    $('#finalTotal').text(userTotal);
  }
  //This function adds the wins to the userTotal
  // 
  function winner() {
    alert("Oh Happy Day!");
    wins++;
    $('#numberWins').text(wins);
    reset();
  }
  //This function adds the losses to the userTotal
  // 
  function loser() {
    alert("Sorry:(");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  //sets up click for jewels
  // 
  $('#marinecrystal').on('click', function() {
    userTotal = userTotal + marinecrystal;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    //sets win/lose conditions
    // 
    if (userTotal == Random) {
      winner();
    } else if (userTotal > Random) {
      loser();
    }
  })
  $('#whitecrystal').on('click', function() {
    userTotal = userTotal + whitecrystal;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    if (userTotal == Random) {
      winner();
    } else if (userTotal > Random) {
      loser();
    }
  })
  $('#bluecrystal').on('click', function() {
    userTotal = userTotal + bluecrystal;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    //sets win/lose conditions
    // 
    if (userTotal == Random) {
      winner();
    } else if (userTotal > Random) {
      loser();
    }
  })
  $('#purplecrystal').on('click', function() {
    userTotal = userTotal + purplecrystal;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    if (userTotal == Random) {
      winner();
    } else if (userTotal > Random) {
      loser();
    }
  });
});