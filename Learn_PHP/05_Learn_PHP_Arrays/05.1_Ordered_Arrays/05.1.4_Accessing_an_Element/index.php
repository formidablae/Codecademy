<?php
namespace Codecademy;

$round_one = ["X", "X", "first winner"];

$round_two = ["second winner", "X", "X", "X"];

$round_three = ["X", "X", "X", "X", "third winner"];

// Write your code below:
$winners = [$round_one[2], $round_two[0], $round_three[4]];
print_r($winners);
