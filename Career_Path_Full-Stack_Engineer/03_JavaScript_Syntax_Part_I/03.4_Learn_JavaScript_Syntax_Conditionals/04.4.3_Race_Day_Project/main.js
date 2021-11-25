let raceNumber = Math.floor(Math.random() * 1000);

let runnerRegisteredEarly = true;

let runnersAge = 20;

if (runnersAge >= 18 && runnerRegisteredEarly) {
    raceNumber += 1000;
}

if (runnersAge > 18 && runnerRegisteredEarly) {
    console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
} else if (runnersAge >= 18 && !runnerRegisteredEarly) {
    console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
} else if (runnersAge < 18) {
    console.log(`You will race at 12:00 am. Your race number is ${raceNumber}.`);
} else {  // runner exactly 18 years old
    console.log(`See the registration desk.`);
}
