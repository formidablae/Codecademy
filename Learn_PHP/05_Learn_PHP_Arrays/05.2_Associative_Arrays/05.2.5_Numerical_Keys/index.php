<?php
namespace Codecademy;

// Write your code below:
$hybrid_array = [
    "apple",
    "banana",
    "cherry",
    "pear",
];

$hybrid_array[count($hybrid_array) - 1 + 5] = "five more";

print_r($hybrid_array);

array_push($hybrid_array, rand());

echo $hybrid_array[9];
