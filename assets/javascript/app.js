$(document).ready(function() {
	//set timer to start at 120 seconds
	var number = 120;
	//counter that will hold setInterval
	var counter;
	//question bank

	//when start is pressed, run startQuiz function to start quiz
	$("#start").on("click", startQuiz);

	//start quiz function
	function startQuiz() {
		counter = setInterval(decrement, 1000);
	}
	//decrement function
	function decrement() {
		//decreases number (timer) by 1
		number--;
		//writes number to quizTimer div id
		$("#quizTimer").html("<h2>" +number + " seconds remaining </h2>");

		//when timer hits 0
		if (number === 0) {
			// run quizFinished function
			quizFinished();
		}

	}

	//quizFinished function runs when quiz timer hits 0

	function quizFinished() {
		clearInterval(counter);
		$("#quizTimer").empty();
	}

});