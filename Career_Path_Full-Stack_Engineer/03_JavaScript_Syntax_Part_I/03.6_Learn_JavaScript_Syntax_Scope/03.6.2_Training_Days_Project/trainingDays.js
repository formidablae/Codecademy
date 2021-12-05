// The scope of `random` is too loose 
const name = 'Nala';

const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'Marathon';
    } else if (random === 1) {
        return 'Triathlon';
    } else if (random === 2) {
        return 'Pentathlon';
    }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
    let days = 0;
    if (event === 'Marathon') {
        days = 50;
    } else if (event === 'Triathlon') {
        days = 100;
    } else if (event === 'Pentathlon') {
        days = 200;
    }

    return days;
};

// The scope of `name` is too tight 
const logEvent = event1 => {
    console.log(`${name}'s event is: ${event1}`);
};

const logTime = days => {
    console.log(`${name}'s time to train is: ${days} days`);
};

const event1 = getRandEvent();
const days1 = getTrainingDays(event1);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 

logEvent(event1);
logTime(days1);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
 
logEvent(name2, event2);
logTime(name2, days2);
