<?php
namespace Codecademy;
$doge_meme = ["top_text" => "Such Python", "bottom_text" => "Very language. Wow.", "img" => "very-cute-dog.jpg", "description" => "An adorable doge looks confused."];

$bad_meme = ["top_text" => "i don't know", "bottom_text" => "i can't think of anything", "img" => "very-fat-cat.jpg", "description" => "A very fat cat looks happy."];

// Write your code below:
function createMeme($meme) {
    $meme["top_text"] = "Much PHP";
    $meme["bottom_text"] = "Very programming. Wow.";
    return $meme;
}

$php_doge = createMeme($doge_meme);

print_r($php_doge);

function fixMeme(&$meme) {
    $meme["top_text"] = "Less PHP";
    $meme["bottom_text"] = "Little programming. Hmmm.";
}

fixMeme($bad_meme);
