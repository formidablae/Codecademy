const { expect } = require('chai')

// Write your function here:
function canIVote(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

// Uncomment the line below when you're ready to try out your function
console.log(canIVote(19)) // Should print true

// We encourage you to add more function calls of your own to test your code!
expect(canIVote(19)).to.equal(true);
expect(canIVote(16)).to.equal(false);
expect(canIVote(18)).to.equal(true);
