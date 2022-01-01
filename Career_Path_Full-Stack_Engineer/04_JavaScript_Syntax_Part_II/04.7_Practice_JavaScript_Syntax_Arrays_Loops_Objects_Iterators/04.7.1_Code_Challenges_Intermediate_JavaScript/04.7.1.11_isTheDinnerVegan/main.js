// Write your code here:
function isTheDinnerVegan(menu) {
    return menu.every(item => item.source === 'plant');
}

// Feel free to comment out the code below to test your function
/*
const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false
*/
