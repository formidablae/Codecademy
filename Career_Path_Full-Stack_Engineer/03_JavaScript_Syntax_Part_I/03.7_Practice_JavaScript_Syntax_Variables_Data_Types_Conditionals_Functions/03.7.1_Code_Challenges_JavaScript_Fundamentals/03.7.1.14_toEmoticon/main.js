// Write your function here:
function toEmoticon(str) {
    if (str === "shrug")
        return "|_{\"}_|";
    else if (str === "smiley face")
        return ":)";
    else if (str === "frowny face")
        return ":(";
    else if (str === "winky face")
        return ";)";
    else if (str === "heart")
        return "<3";
    else return "|_(* ~ *)_|";
}

// Uncomment the line below when you're ready to try out your function
console.log(toEmoticon("whatever")) 
// Should print  '|_(* ~ *)_|'

// We encourage you to add more function calls of your own to test your code!
