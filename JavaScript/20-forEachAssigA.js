 const arrayNumbers = [ 1, -7, 40, 502, -77, 91, 0, 108,  89, -601 ];

console.log("------------- Array element with index -------------");
 arrayNumbers.forEach((element, index) => {
    console.log(`Index: ${index} & Value ${element}`);
});

console.log("------------- Positive numbers -------------");
const positiveNumbers = [];
arrayNumbers.forEach((element) => {
    if (element > 0) {
        positiveNumbers.push(element);
    }
});

console.log(`Positive Numbers: ${positiveNumbers.join(", ")}`);

console.log("------------- Negative numbers -------------");
const negativeNumbers = [];
arrayNumbers.forEach((element) => {
    if (element < 0) {
        negativeNumbers.push(element);
    }
});

console.log(`Negative Numbers: ${negativeNumbers.join(", ")}`);

console.log("------------- Even numbers -------------");
const evenNumbers = [];
arrayNumbers.forEach((element) => {
    if (element % 2 == 0) {
        evenNumbers.push(element);
    }
});
console.log(`Even Numbers: ${evenNumbers.join(", ")}`);

console.log("------------- Sum of all elements -------------");
let totalSum = 0;
arrayNumbers.forEach((element) => {
    totalSum += element;
});
console.log(`Total Sum of Array Elements: ${totalSum}`);

console.log("------------- Elements at even index -------------");
arrayNumbers.forEach((element, index) => {
    if (index % 2 == 0) {
        console.log(`Index ${index} → ${element}`);
    }
});