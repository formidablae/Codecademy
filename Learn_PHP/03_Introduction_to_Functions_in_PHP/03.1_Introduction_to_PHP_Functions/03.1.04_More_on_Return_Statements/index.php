<?php
	function notFound() {
		echo "ERROR: Page not found!\n";
		return 404;
	}

	function greetLearner() {
		echo "Hello, Learner!\n";
		echo "I hope you're (still) enjoying PHP!\n";
		echo "Love, Codecademy\n";
		return "<3";
	}

	// Don't change the code below:

	$error = notFound(); 
	$heart = greetLearner();

	echo "I received a $error, but it's ok because I also received $heart.";
