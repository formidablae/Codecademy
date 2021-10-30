function triple(value) {
    return value * 3;
}
function greetTripled(greeting, value) {
    console.log(`${greeting}, ${triple(value)}!`);
}
greetTripled('Hiya', 5);
