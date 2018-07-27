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


//Additional variables
    var imgArray = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", 'q8', "q9", "q10"];
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

    //Game start and reset functions
    $(".btn start").click(function() {
        $(this).hide();
        newGame();
    });

    $("#startOverBtn").click(function() {
        $(this).hide();
        newGame();
    });

    