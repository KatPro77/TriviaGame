$(document).ready(function () {
	// Variables for trivia questions with (answers)

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
	var answer = ["Abbey Road", "Notting Hill", "The Prime Minister", "Wimbledon", "Wembley Arena", "Sherlock Holmes", "Picadilly Circus", "Department Stores", "Peter Pan", "Mind The Gap!"];
	var firstChoice = ["Baker Street", "Camden Town", "The Prime Minister", "Regent's Park", "Westminster Abbey", "Jack The Ripper", "Picadilly Circus", "Department Stores", "Harry Potter", "Out Of My Way!"];
	var secondChoice = ["Buckingham Palace", "Notting Hill", "Spice Girls", "Wimbledon", "Royal Albert Hall", "Sherlock Holmes", "Camden Town", "Traditional English Candy", "Mary Poppins", "Mind The Gap!"];
	var thirdChoice = ["Abbey Road", "Hyde Park", "The Queen", "Hampstead Heath", "Hammersmith Apollo", "Columbo", "West End", "UK's version of Bonnie & Clyde", "Teletubbies", "That's My Seat!", "#"];
	var fourthChoice = ["Oxford Street", "Primrose Hill", "Sherlock Holmes", "Covent Garden", "Wembley Arena", "Kojak", "Notting Hill", "Names of The Queen's favorite dogs", "Peter Pan", "Cheers, Mate!"];

	// Show & Hide Functions
	function showHolders() {
		$("#myQuestion").show();
		$("#option-1").show();
		$("#option-2").show();
		$("#option-3").show();
		$("#option-4").show();
	}
	function hideHolders() {
		$("#myQuestion").hide();
		$("#option-1").hide();
		$("#option-2").hide();
		$("#option-3").hide();
		$("#option-4").hide();
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
		$("#image-placement").hide();
		$("#timer").show();
		showHolders();
		$("#myQuestion").html(question[count]);
		$("#option-1").html(firstChoice[count]);
		$("#option-2").html(secondChoice[count]);
		$("#option-3").html(thirdChoice[count]);
		$("#option-4").html(fourthChoice[count]);

	}

	$("#option-1").on("click", checkAnswer)
	$("#option-2").on("click", checkAnswer)
	$("#option-3").on("click", checkAnswer)
	$("#option-4").on("click", checkAnswer)

	// Check Answer Function
	function checkAnswer() {

		hideHolders();

		if ($(this).text() === answer[count]) {
			stopTime();
			isSelected = true;
			$("#answer-holder").show();
			$("#answer-holder").html("Correct! The answer is: " + answer[count]);
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
			$("#timer").hide();
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
		time = 26;
	}

	function displayTime() {
		time--;
		$("#timer").html("Time Left: " + time);

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
		if (count < question.length -1) {
			setTimeout(startTime, 2000);
			setTimeout(displayQuestion, 3000);
		}
	}

	resetTime();

	// Display Images With Answer
	function displayImage() {
		if (count === 0) {
			$("#image-placement").show();
			$("#image-placement").html('<img src="assets/images/Q1.JPG">');
		}
		else if (count === 1) {
			$("#image-placement").show();
			$("#image-placement").html('<img src="assets/images/Q2.jpg">');
		}
		else if (count === 2) {
			$("#image-placement").show();
			$("#image-placement").html('<img src="assets/images/Q3.jpg">');
		}
		else if (count === 3) {
			$("#image-placement").show();
			$("#image-placement").html('<img src="assets/images/Q4.jpg">');
		}
		else if (count === 4) {
			$("#image-placement").show();
			$("#image-placement").html('<img src="assets/images/Q5.jpg">');
		}
		else if (count === 5) {
			$("#image-placement").show();
			$("#image-placement").html('<img src="assets/images/Q6.jpg">');
		}
		else if (count === 6) {
			$("#image-placement").show();
			$("#image-placement").html('<img src="assets/images/Q7.jpg">');
		}
		else if (count === 7) {
			$("#image-placement").show();
			$("#image-placement").html('<img src="assets/images/Q8.jpg">');
		}
		else if (count === 8) {
			$("#image-placement").show();
			$("#image-placement").html('<img src="assets/images/q9-peter-pan.jpg">');
		}
		else if (count === 9) {
			$("#image-placement").show();
			$("#image-placement").html('<img src="assets/images/Q10.jpg">');
		}
	}


	
	// Results Function   
	function showResults() {
	if (count <10) {
		$("#timer").empty();
		$("#myQuestion").empty();
		$("#answer-holder").empty();
		$("#image-placement").empty();
	} else {
		$("#correct-holder").show();
		$("#correct-holder").html("Correct: " + correct);
		$("#incorrect-holder").show();
		$("#incorrect-holder").html("Incorrect: " + incorrect);
		$("#unanswered-holder").show();
		$("#unanswered-holder").html("Unanswered: " + unanswered);
		$("#restart-holder").show();
		$("#restart-holder").html("Click Start to play again!");
		}
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
