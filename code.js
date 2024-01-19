const readline = require('readline-sync');

let productA = parseInt(readline.question("Enter the quantity of product A: "));
let wrapA = readline.question("Is product A wrapped (y/n): ");
let productB = parseInt(readline.question("Enter the quantity of product B: "));
let wrapB = readline.question("Is product B wrapped (y/n): ");
let productC = parseInt(readline.question("Enter the quantity of product C: "));
let wrapC = readline.question("Is product C wrapped (y/n): ");

let subtotalA = 20 * productA;
let subtotalB = 40 * productB;
let subtotalC = 50 * productC;
let subtotal = subtotalA + subtotalB + subtotalC;
console.log("Total rough estimate without discounts and other charges: ", subtotal);

let discount1 = 0;
let discount2 = 0;
let discount3 = 0;
let discount4 = 0;

if (subtotal > 200) {
    discount1 = 10;
}
if (Math.max(productA, productB, productC) > 10) {
    discount2 = (5 * subtotal) / 100;
}
if (productA + productB + productC > 20) {
    discount3 = (10 * subtotal) / 100;
}
if (productA + productB + productC > 30 && (Math.max(productA, productB, productC)) > 15) {
    let temp = 0;
    if (productA > 15) {
        discount4 += (0.5 * subtotalA);
    }
    if (productB > 15) {
        discount4 += (0.5 * subtotalB);
    }
    if (productC > 15) {
        discount4 += (0.5 * subtotalC);
    }
}

let maxDiscount = Math.max(discount1, discount2, discount3, discount4);

let finalDiscount = [];
if (maxDiscount === discount1) {
    finalDiscount.push("First discount");
    finalDiscount.push(discount1);
} else if (maxDiscount === discount2) {
    finalDiscount.push("Second discount");
    finalDiscount.push(discount2);
} else if (maxDiscount === discount3) {
    finalDiscount.push("Third discount");
    finalDiscount.push(discount3);
} else {
    finalDiscount.push("Fourth discount");
    finalDiscount.push(discount4);
}

console.log("Discount category: ", finalDiscount[0]);
console.log("Discount amount: ", finalDiscount[1]);

// Wrapping charges
let wrapFee = 0;
if (wrapA === "y") {
    wrapFee += productA;
}
if (wrapB === "y") {
    wrapFee += productB;
}
if (wrapC === "y") {
    wrapFee += productC;
}

// Delivery charges
let deliveryFee = 0;
deliveryFee += Math.ceil(productA / 10) * 5;
deliveryFee += Math.ceil(productB / 10) * 5;
deliveryFee += Math.ceil(productC / 10) * 5;

console.log("Wrap fee: ", wrapFee);
console.log("Delivery fee: ", deliveryFee);

console.log("Total fee: ", subtotal + wrapFee + deliveryFee - finalDiscount[1]);
