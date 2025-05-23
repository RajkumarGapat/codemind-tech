const array = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];

let arrayLength = array.length;
console.log(`====== Total length of an array is: ${arrayLength} ======`);

let firstElement = array[0];
let lastElement = array[array.length-1];
let thirdElement = array[array.length-3];
console.log(`====== First element of array is: ${firstElement} ======`);
console.log(`===== Last element of array is: ${lastElement} ======`);
console.log(`====== Third last element of array is: ${thirdElement} ======`);

console.log(`===== All even numbers in array =====`);
let evenNumbers = [];
for (const num of array) {
    if(num%2 == 0){
        evenNumbers.push(num);
    }
}
console.log(evenNumbers.join(" ")); 


console.log(`===== All odd numbers in array =====`);
let oddNumbers = [];
for (const num of array) {
    if(num%2 != 0){
        oddNumbers.push(num);
    }
}
console.log(oddNumbers.join(" ")); 


let evenPosSum = 0;
let evenPosElements = [];
console.log(`===== Even positioned elements (index starts from 0): =====`);
for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
        evenPosElements.push(array[i]);
        evenPosSum += array[i];
    }
}
console.log(evenPosElements.join(" "));
console.log(`Sum of even positioned elements: ${evenPosSum}`);


let oddPosSum = 0;
let oddPosElements = [];
console.log(`===== Odd positioned elements (index starts from 0): =====`);
for (let i = 0; i < array.length; i++) {
    if (i % 2 != 0) {
        oddPosElements.push(array[i]);
        oddPosSum += array[i];
    }
}
console.log(oddPosElements.join(" "));
console.log(`Sum of odd positioned elements: ${oddPosSum}`);


let totalSum = 0;
for (const num of array) {
    totalSum += num;
}
console.log(`===== Sum of all array elements: ${totalSum} =====`);


console.log(`===== Numbers that are multiples of 5: =====`);
let multiplesOf5 = [];
for (const num of array) {
    if (num % 5 == 0) {
        multiplesOf5.push(num);
    }
}
console.log(multiplesOf5.join(" "));

let includes115 = array.includes(115)
console.log(`===== Is number 115 available in array? --> ${includes115} =====`);
let includes23 = array.includes(23)
console.log(`===== Is number 23 available in array? --> ${includes23} =====`);

console.log(`===== Array after inserting 55 and 66 at index 3: =====`);
array.splice(3, 0, 55, 66);
console.log(array);

console.log(`====== Array after deleting 3 elements from index 4: =====`);
array.splice(4, 3);
console.log(array);