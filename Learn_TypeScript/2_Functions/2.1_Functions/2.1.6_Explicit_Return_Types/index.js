"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resources_1 = require("./resources");
function returnFruit() {
    let num = (0, resources_1.getUserChoice)();
    switch (num) {
        case 1: return (0, resources_1.f1)();
        case 2: return (0, resources_1.f2)();
        case 3: return (0, resources_1.f3)();
        case 4: return (0, resources_1.f4)();
        case 5: return (0, resources_1.f5)();
        case 6: return (0, resources_1.f6)();
        case 7: return (0, resources_1.f7)();
        case 8: return (0, resources_1.f8)();
        case 9: return (0, resources_1.f9)(); //The problematic function is f9()
        case 10: return (0, resources_1.f10)();
        case 11: return (0, resources_1.f11)();
        case 12: return (0, resources_1.f12)();
    }
    return 'durian.jpg';
}
console.log(returnFruit());
