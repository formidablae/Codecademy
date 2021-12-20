function robotFactory(model, mobile) {
    return {
        model,
        mobile,
        beep() {
            console.log('Beep Boop');
        },
    }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)
