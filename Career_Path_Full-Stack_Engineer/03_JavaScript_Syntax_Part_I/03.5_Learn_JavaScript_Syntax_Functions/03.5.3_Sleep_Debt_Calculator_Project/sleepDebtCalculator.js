const getSleepHours = day => {
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 7;
    } else if (day === 'wednesday') {
        return 8;
    } else if (day === 'thursday') {
        return 6;
    } else if (day === 'friday') {
        return 9;
    } else if (day === 'saturday') {
        return 7;
    } else if (day === 'sunday') {
        return 8;
    }
};

console.log(getSleepHours('monday'));
console.log(getSleepHours('tuesday'));
console.log(getSleepHours('wednesday'));
console.log(getSleepHours('thursday'));
console.log(getSleepHours('friday'));
console.log(getSleepHours('saturday'));
console.log(getSleepHours('sunday'));

const getActualSleepHours = () => {
    return getSleepHours('monday') +
           getSleepHours('tuesday') +
           getSleepHours('wednesday') +
           getSleepHours('thursday') +
           getSleepHours('friday') +
           getSleepHours('saturday') +
           getSleepHours('sunday');
}

const getIdealSleepHours = (idealHours = 8) => {
    return idealHours * 7;
}

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got', actualSleepHours - idealSleepHours, 'hours of sleep more than needed!');
    } else if (actualSleepHours < idealSleepHours) {
        console.log('You got', idealSleepHours - actualSleepHours, 'hours of sleep less than needed!');
    }
}

calculateSleepDebt();
