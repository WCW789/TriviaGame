var questionsAnswers = [
    ["Which one is a mammal? ", "Dog", "Octopus", "Snake", "Crab", "Dog"],
    ["Which one is a bird? ", "Cat", "Jellyfish", "Owl", "Fly", "Owl"],
    ["Which one is an insect? ", "Horse", "Frog", "Starfish", "Ladybug", "Ladybug"],
    ["Which one is an invertebrate? ", "Monkey", "Snail", "Parrot", "Dolphin", "Snail"],
];

var theGame = $("#theGame");
var score = 0;
var questionIndex = counter-1;
var counter = 1;

$("#theGame").empty();

var resetGame = function() {
    $("#triviaGame").empty();
    $("#buttonReset").empty();
        console.log("New Game!");
    timerGame(4,"testing");
    counter = counter+1;

    for (questionIndex = counter-1; questionIndex < counter; questionIndex++){
        heading = $("<h2>");
        $("#theGame").append(heading);
        heading.text(questionsAnswers[questionIndex][0]);
        
        for (var j=1; j<5; j++) {
            var button = $("<button>")
            button.addClass("buttonClass");
            button.attr("data-button", questionsAnswers[questionIndex][j]);
            button.text(questionsAnswers[questionIndex][j]);
            $("#theGame").append(button);
        }
    } 
}

setInterval(function(){
    if (counter <= 3) {
    resetGame()
 }
    else if (counter = 4) {
        $("#here").text("You got " +score+ " questions out of 4! Click the new game button to play again!");
        $("#triviaGame").empty();
        clearInterval();
        
        var buttonForGame = $("<button>")
        buttonForGame.text("New Game!");
            $("#buttonReset").append(buttonForGame);

        buttonForGame = document.getElementById("buttonReset");
        buttonForGame.onclick = function () {
            $("#triviaGame").empty();
            counter = 0;
            score = 0;
            $("#theGame").empty();
            resetGame();
           
          }
    }
}, 7000);
    
function timerGame(time, section) {
  var triviaGame = document.getElementById(section);
  triviaGame.innerHTML = "Seconds left: " + time;
  time--;

 var theTimer = setTimeout('timerGame('+time+',"'+section+'")',1000);
    if(time <= -1) {
    clearTimeout(theTimer);
    triviaGame.innerHTML = "Time is up!";
    $("#theGame").empty();

    } else if (time >= 0) {
        var userInput = document.getElementById("theGame");
        userInput.addEventListener('click', function() {
        console.log("Hello");
        clearTimeout(theTimer);
        $("#testing").empty();
        $("#theGame").empty();
        });
     }
     console.log(time)
    }
    timerGame(4,"testing");
    
    
for (questionIndex = counter-1; questionIndex < counter; questionIndex++){
    var heading = $("<h2>");
    heading.text(questionsAnswers[questionIndex][0]);
    $("#theGame").append(heading);

    for (var j=1; j<5; j++) {
        var button = $("<button>");
        button.addClass("buttonClass");
        button.attr("data-button", questionsAnswers[questionIndex][j]);
        button.text(questionsAnswers[questionIndex][j]);
        $("#theGame").append(button);
    }
}

function alertButton() {
    var buttonThis = ($(this).attr("data-button"));
    var buttonThat = (questionsAnswers[questionIndex-1][5]);
    console.log(buttonThis);
    console.log(buttonThat);

    if (buttonThat == buttonThis) {
        console.log("qwerty");
        triviaGame.innerHTML = "Good job! " + buttonThat + " is the answer!";
        score = score + 1;
        $("#theGame").empty();
    } else {
        console.log("ok");
        triviaGame.innerHTML = "Sorry!  The answer was " + buttonThat + "!";
        $("#theGame").empty();
    }
    $("#theGame").empty();
}

$(document).on("click", ".buttonClass", alertButton);

