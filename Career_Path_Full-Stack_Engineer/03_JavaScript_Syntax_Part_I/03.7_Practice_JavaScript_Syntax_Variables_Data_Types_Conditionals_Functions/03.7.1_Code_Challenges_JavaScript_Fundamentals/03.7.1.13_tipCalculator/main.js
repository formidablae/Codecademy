// Write your function here:
function tipCalculator(quality, total) {
    if (quality === "excellent") {
        return total * .30;
    } else if (quality === "good") {
        return total * .20;
    } else if (quality === "ok") {
        return total * .15;
    } else if (quality === "bad") {
        return total * .05;
    } else {
        return total * .18;
    }
}

// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('good', 100)) //should return 20

// We encourage you to add more function calls of your own to test your code!
