"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
let productName = products_1.default[0].name;
console.log(productName);
const product = products_1.default.filter((prod) => {
    if (prod.name == productName)
        return prod;
})[0];
console.log(product);
if (product.preOrder === 'true') {
    console.log("We will send a message when it's on the way.");
}
let shipping;
let taxPercent;
let taxTotal;
let total;
let shippingAddress = 'New York City';
if (Number(product.price) >= 25) {
    shipping = 0;
    console.log("Free shipping.");
}
if (shippingAddress.indexOf("New York") >= 0) {
    taxPercent = 0.10;
}
else {
    taxPercent = 0.05;
}
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal;
console.log(product.name);
console.log(shippingAddress);
console.log(Number(product.price));
console.log(taxTotal);
console.log(total);
