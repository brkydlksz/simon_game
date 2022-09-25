var gamePattern = []
var level = 0
var clickPattern = []
var started = false;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    sequence();
    started = true;
  }
});


function sequence() {
  level++
  var clickPattern = []
  var randomNumber = Math.floor(Math.random() * 4) + 1
  if (randomNumber == 1) {
    keyColor = "green"
  } else if (randomNumber == 2) {
    keyColor = "red"
  } else if (randomNumber == 3) {
    keyColor = "yellow"
  } else if (randomNumber == 4) {
    keyColor = "blue"
  };
  gamePattern.push(keyColor)

  $("#" + keyColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

}

function design(colour) {

  if (colour == "green") {
    var audio = new Audio("sounds/green.mp3");
    audio.play();
    $("#" + colour).addClass("pressed");
    setTimeout(function() {
      $("#" + colour).removeClass("pressed");
    }, 100);

  } else if (colour == "red") {

    var audio = new Audio("sounds/red.mp3");
    audio.play();
    $("#" + colour).addClass("pressed");
    setTimeout(function() {
      $("#" + colour).removeClass("pressed");
    }, 100);

  } else if (colour == "yellow") {

    var audio = new Audio("sounds/yellow.mp3");
    audio.play();
    $("#" + colour).addClass("pressed");
    setTimeout(function() {
      $("#" + colour).removeClass("pressed");
    }, 100);


  } else if (colour == "blue") {

    var audio = new Audio("sounds/blue.mp3");
    audio.play();
    $("#" + colour).addClass("pressed");
    setTimeout(function() {
      $("#" + colour).removeClass("pressed");
    }, 100);

  }

}

console.log(level)
//console.log(gamePattern);

$(".btn").click(function() {
  var colour = $(this).attr("id")
  clickPattern.push(colour)
  design(colour)
  clickTimes(clickPattern.length - 1);


});

function clickTimes(value) {
  console.log(clickPattern)
  console.log(gamePattern)

  if (gamePattern[value] === clickPattern[value]) {
    if (clickPattern.length === gamePattern.length) {
      $("#level-title").text("Level " + level);
      setTimeout(function() {
        sequence();
      }, 1000);
    }
  } else {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }

}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
