<?php
namespace Codecademy;

// Write your code below:
function calculateDistance($num1, $num2) {
  return abs($num1 - $num2);
}

echo calculateDistance(-1, 4) . "\n";  // should return 5
echo calculateDistance(4, -1) . "\n";  // should return 5
echo calculateDistance(3, 7) . "\n";  // should return 4
echo calculateDistance(7, 3) . "\n";  // should return 4

function calculateTip($cost) {
  return round($cost * 1.18, 0);
}

echo calculateTip(100) . "\n";  // should return 118
echo calculateTip(35) . "\n";  // should return 41
echo calculateTip(88.77) . "\n";  // should return 105
