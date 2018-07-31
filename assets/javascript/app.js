$(document).ready(function () {
	// Variables for trivia questions with boolean values (answers)

	// var myQuestions = [{
	// 	question: "Where in London is the famous recording studio used by The Beatles?",
	// 	answerList: ["Baker Street", "Buckinghm Palace", "Abbey Road", "Oxford Street"],
	// 	correctAnswer: 2
	// },

	// {
	// 	question: "What area of London was used to make J. Roberts and H.Grant 1999 rom-com?",
	// 	answerList: ["Camden Town", "Notting Hill", "Hyde Park", "Primrose Hill"],
	// 	correctAnswer: 1
	// },

	// {
	// 	question: "Who lives at 10 Downing Street?",
	// 	answerList: ["The Prime Minister", "Spice Girls", "The Queen", "Sherlock Holmes"],
	// 	correctAnswer: 0
	// },

	// {
	// 	question: "Where in London is the home to a major annual tennis tournamnet?",
	// 	answerList: ["Regent's Park", "Wimbledon", "Hampstead Heath", "Covent Garden"],
	// 	correctAnswer: 1
	// },

	// {
	// 	question: "Which London venue hosted tribute concerts for Live Aid, Freddy Mercury and Princess Diana?",
	// 	answerList: ["Westminster Abbey", "Royal Albert Hall", "Hammersmith Apollo", "Wembley Arena"],
	// 	correctAnswer: 3
	// },

	// {
	// 	question: "Which famous detective lived at 221B Baker Street?",
	// 	answerList: ["Jack the Ripper", "Sherlock Holmes", "Columbo", "Kojak"],
	// 	correctAnswer: 1
	// },

	// {
	// 	question: "Which tourist spot is known for shopping and for its large electronic billboards?",
	// 	answerList: ["Piccadilly Circus", "Camden Town", "West End", "Notting Hill"],
	// 	correctAnswer: 0
	// },

	// {
	// 	question: "What are HARRODS and SELFRIDGES?",
	// 	answerList: ["Department Stores", "Traditional British Candy", "UK's version of Bonnie & Clyde", "Names of The Queens favorite dogs"],
	// 	correctAnswer: 1
	// },

	// {
	// 	question: "Which childrens book character has its own statue in Kensington Gardes?",
	// 	answerList: ["Harry Potter", "Mary Poppins", "Teletubbies", "Peter Pan"],
	// 	correctAnswer: 3
	// },

	// {
	// 	question: "What is the famous phrase used in London Underground (Subway)?",
	// 	answerList: ["Out Of My Way!", "Mind The Gap!", "That's My Seat!", "Cheers, Mate!"],
	// 	correctAnswer: 2
	// }];
	// console.log(myQuestions);

	// //Additional variables
	// var imgArray = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10",];
	// var win = rightAnswer;
	// var loss = wrongAnswer;
	// var currentQuestion;
	// var rightAnswer;
	// var wrongAnswer;
	// var userGuess;
	// var answered;
	// var unanswered;
	// var time;
	// var seconds;
	// var messages = {
	// 	correctGuess: "CORRECT!",
	// 	wrongGuess: "SORRY, WRONG ANSWER!",
	// 	endTime: "Time is up!",
	// 	endGame: "Check out yoru score",
	// }
	// console.log(imgArray);

	// //Game start and reset functions
	// $("#startBtn").on("click", function () {
	// 	console.log("check in click")
	// 	$(this).hide();
	// 	newGame();

	// });

	// $("#startOverBtn").on("click", function () {
	// 	$(this).hide();
	// 	newGame();
	// });

	// function newGame() {
	// 	$("#finalMessage").empty();
	// 	$("#rightAnswers").empty();
	// 	$("#wrongAnswers").empty();
	// 	$("#unanswered").empty();
	// 	currentQuestion = 0;
	// 	rightAnswer = 0;
	// 	wrongAnswer = 0;
	// 	unanswered = 0;
	// 	newQuestion();


	// 	function newQuestion() {
	// 		$("#message").empty();
	// 		$("#wrongAnswers").empty();
	// 		$("#photo").empty();
	// 		answered = true;
	// 	}

	// 	//Quiz part
	// 	$('#currentQuestion').html('Question #' + (currentQuestion + 1) + '/' + myQuestions.length);
	// 	$('.question').html('<h2>' + myQuestions[currentQuestion].question + '</h2>');
	// 	for (var i = 0; i < 4; i++) {
	// 		var choices = $('<div>');
	// 		choices.text(myQuestions[currentQuestion].answerList[i]);
	// 		choices.attr({ 'data-index': i });
	// 		choices.addClass('thisChoice');
	// 		$('.answerList').append(choices);
	// 	}

	// 	timing();
	// 	$('.thisChoice').on('click', function () {
	// 		userGuess = $(this).data('index');
	// 		clearInterval(time);
	// 		answerPage();
	// 	});
	// }

	// function timing() {
	// 	seconds = 20;
	// 	$('#timer').html('<h3>Time Remaining: ' + seconds + '</h3>');
	// 	answered = true;
	// 	//sets timer to go down
	// 	time = setInterval(showCountdown, 1000);
	// }


	// function countdown() {
	// 	seconds--;
	// 	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	// 	if (seconds < 1) {
	// 		clearInterval(time);
	// 		answered = false;
	// 		answerPage();
	// 	}
	// }


	// function answerPage() {
	// 	$('#currentQuestion').empty();
	// 	$('.thisChoice').empty();
	// 	$('.question').empty();

	// 	var rightAnswerText = myQuestions[currentQuestion].answerList[myQuestions[currentQuestion].answer];
	// 	var rightAnswerIndex = myQuestions[currentQuestion].correctAnswer;
	// 	$('#photo').html('<img src = "assets/images/' + imgArray[currentQuestion] + '.jpg" width = "400px">');

	// 	//checks to see correct, incorrect, or unanswered
	// 	if ((userSelect == rightAnswerIndex) && (answered == true)) {
	// 		rightAnswer++;
	// 		$('#message').html(messages.rightGuess);
	// 	} else if ((userGuess != rightAnswerIndex) && (answered == true)) {
	// 		wrongAnswer++;
	// 		$('#message').html(messages.wrongGuess);
	// 		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
	// 	} else {
	// 		unanswered++;
	// 		$('#message').html(messages.endTime);
	// 		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
	// 		answered = true;
	// 	}

	// 	if (currentQuestion == (myQuestions.length - 1)) {
	// 		setTimeout(scoreboard, 5000)
	// 	} else {
	// 		currentQuestion++;
	// 		setTimeout(newQuestion, 5000);
	// 	}
	// }

	// function scoreboard() {
	// 	$('#timer').empty();
	// 	$('#message').empty();
	// 	$('#correctedAnswer').empty();
	// 	$('#photo').empty();

	// 	$('#finalMessage').html(messages.finished);
	// 	$('#correctAnswers').html("Correct Answers: " + rightAnswer);
	// 	$('#incorrectAnswers').html("Incorrect Answers: " + wrongAnswer);
	// 	$('#unanswered').html("Unanswered: " + unanswered);
	// 	$('#startOverBtn').addClass('reset');
	// 	$('#startOverBtn').show();
	// 	$('#startOverBtn').html('Start Over?');
	// }

	// });


	var count = 0;
	var time = 31;
	var isSelected = false;
	var ticker;
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;

	// Questions and Answer Arrays
	var question = ["Where in London is the famous recording studio used by The Beatles?", "What area of London was used to make J. Roberts and H.Grant 1999 rom-com?", 
	"Who lives at 10 Downing Street?", "Where in London is the home to a major annual tennis tournamnet?", "Which London venue hosted tribute concerts for Live Aid, Freddy Mercury and Princess Diana?", 
	"Which famous detective lived at 221B Baker Street?", "Which tourist spot is known for shopping and for its large electronic billboards?", 
	"What are HARRODS and SELFRIDGES?", "Which childrens book character has its own statue in Kensington Gardes?", "What is the famous phrase used in London Underground (Subway)?",
	];
	var answer = ["Abbey Road", "Notting Hill", "The Prime Minister", "Wimbledon", "Wembley Arena", "Sherlock Holmes", "Picadilly Circus", "Department Stores", "Peter Pan", "Mind The Gap"];
	var firstChoice = ["Baker Street", "Camden Town", "The Prime Minister", "Regent's Park", "Westminster Abbey", "Jack The Ripper", "Picadilly Circus", "Department Stores", "Harry Potter", "Out Of My Way!"];
	var secondChoice = ["Buckingham Palace", "Notting Hill", "Spice Girls", "Wimbledon", "Royal Albert Hall", "Sherlock Holmes", "Camden Town", "Traditioanl English Candy", "Mary Poppins", "Mind The Gap!"];
	var thirdChoice = ["Abbey Road", "Hyde Park", "The Queen", "Hampstead Heath", "Hammersmith Apollo", "Columbo", "West End", "UK's version of Bonnie & Clyde", "Teletubbies", "That's My Seat!"];
	var fourthChoice = ["Oxford Street", "Primrose Hill", "Sherlock Holmes", "Covent Garden", "Wembley Arena", "Kojak", "Notting Hill", "Names of The Queen's favorite dogs", "Peter Pan", "Cheers, Mate!" ];

	// Show & Hide Functions
	function showHolders() {
		$("#question-holder").show();
		$("#choice-holder-1").show();
		$("#choice-holder-2").show();
		$("#choice-holder-3").show();
		$("#choice-holder-4").show();
	}
	function hideHolders() {
		$("#question-holder").hide();
		$("#choice-holder-1").hide();
		$("#choice-holder-2").hide();
		$("#choice-holder-3").hide();
		$("#choice-holder-4").hide();
	}
	function hideResults() {
		$("#correct-holder").hide();
		$("#incorrect-holder").hide();
		$("#unanswered-holder").hide();
		$("#restart-holder").hide();
	}
	function displayQuestion() {
		hideResults();
		$("#answer-holder").hide();
		$("#image-holder").hide();
		$("#time-holder").show();
		showHolders();
		$("#question-holder").html(question[count]);
		$("#choice-holder-1").html(firstChoice[count]);
		$("#choice-holder-2").html(secondChoice[count]);
		$("#choice-holder-3").html(thirdChoice[count]);
		$("#choice-holder-4").html(fourthChoice[count]);

		// Hover CSS
		$("#choice-holder-1").hover(function () {
			$(this).css("color", "gray");
		},
			function () {
				$(this).css("color", "black");
			});
		$("#choice-holder-2").hover(function () {
			$(this).css("color", "gray");
		},
			function () {
				$(this).css("color", "black");
			});
		$("#choice-holder-3").hover(function () {
			$(this).css("color", "gray");
		},
			function () {
				$(this).css("color", "black");
			});
		$("#choice-holder-4").hover(function () {
			$(this).css("color", "gray");
		},
			function () {
				$(this).css("color", "black");
			});
	}
	$("#choice-holder-1").on("click", checkAnswer)
	$("#choice-holder-2").on("click", checkAnswer)
	$("#choice-holder-3").on("click", checkAnswer)
	$("#choice-holder-4").on("click", checkAnswer)

	// Check Answer Function
	function checkAnswer() {

		hideHolders();

		if ($(this).text() === answer[count]) {
			stopTime();
			isSelected = true;
			$("#answer-holder").show();
			$("#answer-holder").html("Right! The answer is: " + answer[count]);
			displayImage();
			correct++;
			count++;
		}
		else {
			stopTime();
			isSelected = true;
			$("#answer-holder").show();
			$("#answer-holder").html("Wrong! The answer is: " + answer[count]);
			displayImage();
			incorrect++;
			count++;
		}

		checkGameEnd();
	}

	// Chekc End Game Function
	function checkGameEnd() {
		if (count === question.length) {
			$("#time-holder").hide();
			showResults();
			count = 0;
			$(".start").show();
			$(".start").on("click", function () {
				resetResults();
				startGame();
			});
		}
	}

	function resetTime() {
		time = 21;
	}

	function displayTime() {
		time--;
		$("#time-holder").html("Time remaining: " + time);

		if (time <= 0) {
			hideHolders();
			stopTime();
			$("#answer-holder").show();
			$("#answer-holder").html("Time is up! The answer is: " + answer[count]);
			displayImage();
			unanswered++;
			count++;
			checkGameEnd();
		}
	}

	function startTime() {
		clearInterval(ticker);
		ticker = setInterval(displayTime, 1000);
	}
	function stopTime() {
		clearInterval(ticker);
		resetTime();
		if (count < question.length - 1) {
			setTimeout(startTime, 2000);
			setTimeout(displayQuestion, 3000);
		}
	}

	resetTime();

	// Display Images With Answer
	function displayImage() {
		if (count === 0) {
			$("#image-holder").show();
			$("#image-holder").html('<img src="assets/images/Q1.jpg">');
		}
		else if (count === 1) {
			$("#image-holder").show();
			$("#image-holder").html('<img src="assets/images/Q2.jpg">');
		}
		else if (count === 2) {
			$("#image-holder").show();
			$("#image-holder").html('<img src="assets/images/Q3.jpg">');
		}
		else if (count === 3) {
			$("#image-holder").show();
			$("#image-holder").html('<img src="assets/images/Q4.jpg">');
		}
		else if (count === 4) {
			$("#image-holder").show();
			$("#image-holder").html('<img src="assets/images/Q5.jpg">');
		}
		else if (count === 5) {
			$("#image-holder").show();
			$("#image-holder").html('<img src="assets/images/Q6.jpg">');
		}
		else if (count === 6) {
			$("#image-holder").show();
			$("#image-holder").html('<img src="assets/images/Q7.jpg">');
		}
		else if (count === 7) {
			$("#image-holder").show();
			$("#image-holder").html('<img src="assets/images/Q8.jpg">');
		}
		else if (count === 8) {
			$("#image-holder").show();
			$("#image-holder").html('<img src="assets/images/Q9.jpg">');
		}
		else if (count === 9) {
			$("#image-holder").show();
			$("#image-holder").html('<img src="assets/images/Q10.jpg">');
		}
	}

	// Show Results Function   
	function showResults() {
		$("#correct-holder").show();
		$("#correct-holder").html("Correct: " + correct);
		$("#incorrect-holder").show();
		$("#incorrect-holder").html("Incorrect: " + incorrect);
		$("#unanswered-holder").show();
		$("#unanswered-holder").html("Unanswered: " + unanswered);
		$("#restart-holder").show();
		$("#restart-holder").html("Click Start above to play again!");
	}

	// Reset Results Function 
	function resetResults() {
		correct = 0;
		incorrect = 0;
		unanswered = 0;
	}

	// Start Game Function
	function startGame() {
		$(".start").hide();
		startTime();
		displayQuestion();
	}

	// Start Game On Click
	$(".start").on("click", function () {
		startGame();
	});
});
