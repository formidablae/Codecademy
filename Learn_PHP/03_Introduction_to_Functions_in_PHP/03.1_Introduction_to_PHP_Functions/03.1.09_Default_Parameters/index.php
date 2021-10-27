<?php
// Write your code below:

function calculateTip($cost, $tip = 20) {
    return $cost * (1 + ($tip / 100));
}

echo calculateTip(100) . "\n";
echo calculateTip(100, 30);
