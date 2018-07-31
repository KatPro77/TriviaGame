$(document).ready(function(){
// Variables for trivia questions with boolean values (answers)

var myQuestions = [{
	question: "Where in London is the famous recording studio used by The Beatles?",
	answerList: ["Baker Street", "Buckinghm Palace", "Abbey Road", "Oxford Street"],
	correctAnswer: 2
},

{
	question: "What area of London was used to make J. Roberts and H.Grant 1999 rom-com?",
	answerList: ["Camden Town", "Notting Hill", "Hyde Park", "Primrose Hill"],
	correctAnswer: 1
},

{
	question: "Who lives at 10 Downing Street?",
	answerList: ["The Prime Minister", "Spice Girls", "The Queen", "Sherlock Holmes"],
	correctAnswer: 0
},

{
	question: "Where in London is the home to a major annual tennis tournamnet?",
	answerList: ["Regent's Park", "Wimbledon", "Hampstead Heath", "Covent Garden"],
	correctAnswer: 1
},

{
	question: "Which London venue hosted tribute concerts for Live Aid, Freddy Mercury and Princess Diana?",
	answerList: ["Westminster Abbey", "Royal Albert Hall", "Hammersmith Apollo", "Wembley Arena"],
	correctAnswer: 3
},

{
	question: "Which famous detective lived at 221B Baker Street?",
	answerList: ["Jack the Ripper", "Sherlock Holmes", "Columbo", "Kojak"],
	correctAnswer: 1
},

{
	question: "Which tourist spot is known for shopping and for its large electronic billboards?",
	answerList: ["Piccadilly Circus", "Camden Town", "West End", "Notting Hill"],
	correctAnswer: 0
},

{
	question: "What are HARRODS and SELFRIDGES?",
	answerList: ["Department Stores", "Traditional British Candy", "UK's version of Bonnie & Clyde", "Names of The Queens favorite dogs"],
	correctAnswer: 1
},

{
	question: "Which childrens book character has its own statue in Kensington Gardes?",
	answerList: ["Harry Potter", "Mary Poppins", "Teletubbies", "Peter Pan"],
	correctAnswer: 3
},

{
	question: "What is the famous phrase used in London Underground (Subway)?",
	answerList: ["Out Of My Way!", "Mind The Gap!", "That's My Seat!", "Cheers, Mate!"],
	correctAnswer: 2
}];
console.log(myQuestions);

//Additional variables
var imgArray = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10",];
var win = rightAnswer;
var loss = wrongAnswer;
var currentQuestion;
var rightAnswer;
var wrongAnswer;
var userGuess;
var answered;
var unanswered;
var time;
var seconds;
var messages = {
	correctGuess: "CORRECT!",
	wrongGuess: "SORRY, WRONG ANSWER!",
	endTime: "Time is up!",
	endGame: "Check out yoru score",
}
console.log(imgArray);

//Game start and reset functions
$("#startBtn").on("click", function () {
	console.log("check in click")
	$(this).hide();
	newGame();

});

$("#startOverBtn").on("click", function () {
	$(this).hide();
	newGame();
});

function newGame() {
	$("#finalMessage").empty();
	$("#rightAnswers").empty();
	$("#wrongAnswers").empty();
	$("#unanswered").empty();
	currentQuestion = 0;
	rightAnswer = 0;
	wrongAnswer = 0;
	unanswered = 0;
	newQuestion();


	function newQuestion() {
		$("#message").empty();
		$("#wrongAnswers").empty();
		$("#photo").empty();
		answered = true;
	}

	//Quiz part
	$('#currentQuestion').html('Question #' + (currentQuestion + 1) + '/' + myQuestions.length);
	$('.question').html('<h2>' + myQuestions[currentQuestion].question + '</h2>');
	for (var i = 0; i < 4; i++) {
		var choices = $('<div>');
		choices.text(myQuestions[currentQuestion].answerList[i]);
		choices.attr({ 'data-index': i });
		choices.addClass('thisChoice');
		$('.answerList').append(choices);
	}

	timing();
	$('.thisChoice').on('click', function () {
		userGuess = $(this).data('index');
		clearInterval(time);
		answerPage();
	});
}

function timing() {
	seconds = 20;
	$('#timer').html('<h3>Time Remaining: ' + seconds + '</h3>');
	answered = true;
	//sets timer to go down
	time = setInterval(showCountdown, 1000);
}


function countdown() {
	seconds--;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if (seconds < 1) {
		clearInterval(time);
		answered = false;
		answerPage();
	}
}


function answerPage() {
	$('#currentQuestion').empty();
	$('.thisChoice').empty();
	$('.question').empty();

	var rightAnswerText = myQuestions[currentQuestion].answerList[myQuestions[currentQuestion].answer];
	var rightAnswerIndex = myQuestions[currentQuestion].correctAnswer;
	$('#photo').html('<img src = "assets/images/' + imgArray[currentQuestion] + '.jpg" width = "400px">');

	//checks to see correct, incorrect, or unanswered
	if ((userSelect == rightAnswerIndex) && (answered == true)) {
		rightAnswer++;
		$('#message').html(messages.rightGuess);
	} else if ((userGuess != rightAnswerIndex) && (answered == true)) {
		wrongAnswer++;
		$('#message').html(messages.wrongGuess);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
	} else {
		unanswered++;
		$('#message').html(messages.endTime);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
		answered = true;
	}

	if (currentQuestion == (myQuestions.length - 1)) {
		setTimeout(scoreboard, 5000)
	} else {
		currentQuestion++;
		setTimeout(newQuestion, 5000);
	}
}

function scoreboard() {
	$('#timer').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#photo').empty();

	$('#finalMessage').html(messages.finished);
	$('#correctAnswers').html("Correct Answers: " + rightAnswer);
	$('#incorrectAnswers').html("Incorrect Answers: " + wrongAnswer);
	$('#unanswered').html("Unanswered: " + unanswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Start Over?');
}

});

