<?php
	// Write your code below:
	function increaseEnthusiasm($strarg) {
	  return $strarg . "!";
	}

	function repeatThreeTimes($anotherstrarg) {
	  return $anotherstrarg . $anotherstrarg . $anotherstrarg;
	}
	
	echo increaseEnthusiasm("Holaa");
	echo "\n";
	echo repeatThreeTimes("la");
	echo "\n";
	echo increaseEnthusiasm(repeatThreeTimes("da"));
