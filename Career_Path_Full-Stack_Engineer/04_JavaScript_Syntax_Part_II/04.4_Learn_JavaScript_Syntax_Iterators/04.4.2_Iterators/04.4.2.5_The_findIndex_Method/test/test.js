let artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(function (artist) {
    console.log(artist + ' is one of my favorite artists.');
});

let numbers = [1, 2, 3, 4, 5];

squareNumbers = numbers.map(function (number) {
    return number * number;
});


let things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

let onlyNumbers = things.filter(function (thing) {
    return typeOf(thing) === 'number';
});
