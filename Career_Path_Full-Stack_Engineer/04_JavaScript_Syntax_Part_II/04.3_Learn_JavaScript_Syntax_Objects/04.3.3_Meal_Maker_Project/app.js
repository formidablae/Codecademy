const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },

    get appetizers() {
        return this._courses.appetizers;
    },

    get mains() {
        return this._courses.mains;
    },

    get desserts() {
        return this._courses.desserts;
    },

    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
    },

    set mains(mains) {
        this._courses.mains = mains;
    },

    set desserts(desserts) {
        this._courses.desserts = desserts;
    },

    get courses() {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts,
        };
    },

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        return dishes[Math.floor(Math.random() * dishes.length)];
    },

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The total price is ${totalPrice}.`;
    },
};

menu.addDishToCourse('appetizers', 'salad', 5);
menu.addDishToCourse('appetizers', 'soup', 3);
menu.addDishToCourse('appetizers', 'bread', 2);
menu.addDishToCourse('mains', 'steak', 10);
menu.addDishToCourse('mains', 'pasta', 8);
menu.addDishToCourse('mains', 'rice', 5);
menu.addDishToCourse('desserts', 'ice cream', 3);
menu.addDishToCourse('desserts', 'cake', 4);
menu.addDishToCourse('desserts', 'pie', 2);
let meal = menu.generateRandomMeal();
console.log(meal);
console.log(menu.courses);
