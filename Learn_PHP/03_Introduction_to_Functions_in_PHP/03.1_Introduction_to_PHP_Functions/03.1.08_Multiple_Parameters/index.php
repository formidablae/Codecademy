<?php
// Write your code below:

function calculateArea($h, $w) {
  return $h * $w;
}

function calculateVolume($h, $w, $d) {
    return $h * $w * $d;
}

function calculateVolumeNew($h, $w, $d) {
    return calculateArea($h, $w) * $d;
}

echo calculateArea(3, 4) . "\n";
echo calculateVolume(3, 4, 5);
