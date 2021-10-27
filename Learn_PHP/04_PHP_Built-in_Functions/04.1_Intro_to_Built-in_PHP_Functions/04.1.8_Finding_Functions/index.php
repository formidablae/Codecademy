<?php
namespace Codecademy;

// Write your code below:
function convertToShout($str) {
  return strtoupper($str) . "!";
}

echo convertToShout("woah there, buddy") . "\n";  // should return "WOAH THERE, BUDDY!"
echo convertToShout("i just don't know") . "\n";  // should return "I JUST DON'T KNOW!"
echo convertToShout("oh, ok, that's fine") . "\n";  // should return "OH, OK, THAT'S FINE!"
echo convertToShout("it's nice to meet you") . "\n";  // should return "IT'S NICE TO MEET YOU!"

function tipGenerously($num) {
  return ceil($num * 1.2);
}

echo tipGenerously(100.00) . "\n";  // should return 120
echo tipGenerously(982.27) . "\n";  // should return 1179
echo tipGenerously(15.67) . "\n";  // should return 19
echo tipGenerously(66.18) . "\n";  // should return 80
echo tipGenerously(21.65) . "\n";  // should return 26

function calculateCircleArea($d) {
  return pi() * ($d / 2) ** 2;
}

echo calculateCircleArea(25) . "\n";  // should return 490.87385212341
echo calculateCircleArea(30) . "\n";  // should return 706.8583470577
echo calculateCircleArea(872) . "\n";  // should return 597204.19707681
echo calculateCircleArea(6) . "\n";  // should return 28.274333882308
echo calculateCircleArea(29) . "\n";  // should return 660.51985541725
