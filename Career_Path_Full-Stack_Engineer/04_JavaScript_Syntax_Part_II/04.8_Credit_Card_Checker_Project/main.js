// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
const cardCompanies = {
    3: "Amex (American Express)",
    4: "Visa",
    5: "Mastercard",
    6: "Discover"
};

function validateCred(card) {
    // validate using luhn algorithm if the numbers of a card are valid
    let sum = card[card.length - 1];
    for (let i = card.length - 2; i >= 0; i--) {
        if ((card.length - i) % 2 === 0) {
            sum += (card[i] * 2) > 9 ? (card[i] * 2) - 9 : (card[i] * 2);
        }
        else {
            sum += card[i];
        }
    }
    if (sum % 10 !== 0) {
        return false;
    }
    return true;
}

function findInvalidCards(nestedCards) {
    // find invalid cards in a batch of cards
    let invalidCards = [];
    for (let i = 0; i < nestedCards.length; i++) {
        if (!validateCred(nestedCards[i])) {
            invalidCards.push(nestedCards[i]);
        }
    }
    return invalidCards;
}

function idInvalidCardCompanies(invalidCards) {
    // find companies that have issued the invalid cards
    let invalidCardCompanies = new Set();
    for (let i = 0; i < invalidCards.length; i++) {
        let company = cardCompanies[invalidCards[i][0]];
        if (company) {
            invalidCardCompanies.add(company);
        }
        else {
            console.log("Company not found");
        }
    }
    return [...invalidCardCompanies];
}

console.log("valid1", validateCred(valid1));
console.log("valid2", validateCred(valid2));
console.log("valid3", validateCred(valid3));
console.log("valid4", validateCred(valid4));
console.log("valid5", validateCred(valid5));
console.log("\n");

console.log("invalid1", validateCred(invalid1));
console.log("invalid2", validateCred(invalid2));
console.log("invalid3", validateCred(invalid3));
console.log("invalid4", validateCred(invalid4));
console.log("invalid5", validateCred(invalid5));
console.log("\n");

console.log("mystery1", validateCred(mystery1));
console.log("mystery2", validateCred(mystery2));
console.log("mystery3", validateCred(mystery3));
console.log("mystery4", validateCred(mystery4));
console.log("mystery5", validateCred(mystery5));
console.log("\n");

console.log("Are invalid:", findInvalidCards(batch));
console.log("\n");
console.log("Companies that have issued the invalid cards:", idInvalidCardCompanies(findInvalidCards(batch)));
console.log("\n");
