const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log("------------- Original Array -------------");
console.log(arrayNumbers);

console.log("------------- Numbers greater than 50 -------------");
const greaterThan50 = arrayNumbers.filter( (element) => {
    return element > 50;
});
console.log(greaterThan50);

console.log("------------- All even numbers in array -------------");
const evenNumbers = arrayNumbers.filter( (element) => {
    return element % 2 == 0;
});
console.log(evenNumbers);

console.log("------------- All odd numbers in array -------------");
const oddNumbers = arrayNumbers.filter( (element) => {
    return element % 2 !== 0;
});
console.log(oddNumbers);

console.log("------------- Numbers which are multiple of 5 -------------");
const multipleOf5 = arrayNumbers.filter( (element) => {
    return element % 5 == 0;
});
console.log(multipleOf5);

console.log("------------- Numbers between 20 & 50 -------------");
const NumBetn20And50 = arrayNumbers.filter( (element) => {
    return element >= 20 && element <= 50;
});
console.log(NumBetn20And50);

