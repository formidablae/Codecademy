let input = 'Hello mister fisherman, how are you doing today?';

const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
    // console.log(input.length);
    for (let j = 0; j < vowels.length; j++) {
        // console.log(j);
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
            break;
        }
    }

    if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i]);
    }
}

console.log(resultArray.join('').toUpperCase());
