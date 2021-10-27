<?php

function generateStory($singular_noun, $verb, $color, $distance_unit) {
  $story = "The ${singular_noun}s are lovely, ${color}, and deep.
But I have promises to keep,
And ${distance_unit} to go before I ${verb},
And ${distance_unit} to go before I ${verb}.\n\n";
  return $story;
}

echo generateStory("bird", "swim", "purple", "kilometres");
echo generateStory("bear", "eat", "blue", "miles");
echo generateStory("flower", "scream", "yellow", "centimetres");
