let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
    retreat: function() {
        console.log(retreatMessage);
    },

    takeOff: function () {
        console.log('Spim... Borp... Glix... Blastoff!');
    },
};

alienShip.retreat();
alienShip.takeOff();
