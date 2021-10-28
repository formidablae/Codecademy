import products from "./products";

let productName: string = products[0].name;
console.log(productName);

const product = products.filter((prod) => {
  if (prod.name == productName)  return prod;
})[0];

console.log(product);

if (product.preOrder === 'true') {
  console.log("We will send a message when it's on the way.");
}

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

let shippingAddress: string = 'New York City';

if (Number(product.price) >= 25) {
  shipping = 0;
  console.log("Free shipping.");
}

if (shippingAddress.indexOf("New York") >= 0) {
  taxPercent = 0.10;
} else {
  taxPercent = 0.05;
}

taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal;

console.log(product.name);
console.log(shippingAddress);
console.log(Number(product.price));
console.log(taxTotal);
console.log(total);
