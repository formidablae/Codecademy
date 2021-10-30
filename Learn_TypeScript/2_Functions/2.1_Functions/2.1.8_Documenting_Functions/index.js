/**
 * Makes fruit salad mixing fruits
 *
 * @param fruit1 - the first fruit
 * @param fruit2 - the second fruit
 * @param fruit3 - the third fruit
 *
 * @returns - void, no return
 */
function makeFruitSalad(fruit1, fruit2) {
    let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
    console.log(salad);
}
/**
 * Proclaims if ready
 *
 * @param status - the status, by default 'not ready...'
 * @param repeat - the number of times to repeat
 *
 * @returns - implicitly returning void
 */
function proclaim(status = 'not ready...', repeat = 1) {
    for (let i = 0; i < repeat; i += 1) {
        console.log(`I'm ${status}`);
    }
}
