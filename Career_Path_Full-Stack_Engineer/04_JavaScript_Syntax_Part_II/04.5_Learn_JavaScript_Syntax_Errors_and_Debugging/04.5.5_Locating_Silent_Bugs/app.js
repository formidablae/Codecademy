function capitalizeASingleWord(word) {
    // console.log(word);
    if (word.match(' ')) {
        console.log(word);
        return null;
    }

    let firstLetter = word.charAt(0);
    const restOfWord = word.slice(1);

    firstLetter = firstLetter.toUpperCase();

    return firstLetter + restOfWord;
}

// Should return "Hey"
console.log("capitalizeASingleWord('hey') returns: " + capitalizeASingleWord('hey'));

// Should return null
console.log("capitalizeASingleWord('hey ho') returns: " + capitalizeASingleWord(' '));
