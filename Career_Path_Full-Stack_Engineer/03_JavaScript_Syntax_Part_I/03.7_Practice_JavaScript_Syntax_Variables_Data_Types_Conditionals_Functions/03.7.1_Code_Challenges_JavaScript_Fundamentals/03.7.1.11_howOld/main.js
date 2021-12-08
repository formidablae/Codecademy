// Write your function here:
function howOld(age, year) {
    let currentYear = new Date().getFullYear();
    let ageWillBeWas = year - currentYear + age;
    if (ageWillBeWas > age) {
        return `You will be ${ageWillBeWas} in the year ${year}`;
    } else if (ageWillBeWas < 0) {
        return `The year ${year} was ${-ageWillBeWas} years before you were born.`;
    } else {
        return `You were ${ageWillBeWas} in the year ${year}`;
    }
}

// Once your function is written, write function calls to test your code!
