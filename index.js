const tax = 20;
const someThreshold = 30;
const myNumbers = [2, 4, 6, 10, 55, 23];
const vat = addTaxOf(tax);


let sumCalculatedInProceduralWay = 0
for (let i = 0; i < myNumbers.length; i++) {
    const currentNumber = myNumbers[i];
    if (onlyGreaterThan(someThreshold)(currentNumber)) {
        sumCalculatedInProceduralWay += vat(currentNumber);
    }
}

const sumCalculatedInFunctionalWay = myNumbers
    .filter(onlyGreaterThan(someThreshold))
    .map(vat)
    .reduce(sum, 0);

myNumbers.forEach(
    (currentNumber, index) => console.log(`${index} -> ${currentNumber}`));

console.log(sumCalculatedInProceduralWay);
console.log(sumCalculatedInFunctionalWay);

function onlyGreaterThan(threshold) {
    return function (value) {
        return value > threshold;
    }
}

function addTaxOf(tax) {
    return function (value) {
        return value + tax;
    };
}

function sum(accSum, currentValue) {
    return accSum + currentValue;
}
