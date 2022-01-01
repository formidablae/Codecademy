const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
    console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
function declineEverything(arr) {
    arr.forEach(politelyDecline);
}

function acceptEverything(arr) {
    arr.forEach(e => console.log('Ok, I guess I will eat some ' + e + '.'));
}
