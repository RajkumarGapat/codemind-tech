const fruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

console.log("***** First Element *****");
let firstElement = fruits [0];
console.log(firstElement);

console.log("***** Last Element *****");
let lastElement = fruits [fruits.length-1];
console.log(lastElement);

console.log("");
console.log(`***** Add Element --> 'Papaya' before the 'Banana' *****`);
fruits.unshift("Papaya"); 
console.log(fruits);

console.log("");
console.log(`***** Remove 'Mango' from the array *****`);
fruits.splice(4, 1); 
console.log(fruits);

console.log("");
console.log("***** Adding 'Pineapple' at the last position *****");
fruits.push("Pineapple"); 
console.log(fruits);

console.log("");
console.log("***** Inserting 'Dragon Fruit' before 'Water Melon *****'");
fruits.splice(4, 0, "Dragon Fruit");
console.log(fruits);

console.log("");
console.log("***** Replacing 'Orange' with 'Kiwi' *****");
fruits[2] = "Kiwi";
console.log(fruits);

console.log("");
console.log("***** Elements from index 1 to 4 *****");
const sliceFruits1To4 = fruits.slice(1, 5); 
console.log(sliceFruits1To4);

console.log("");
console.log("***** Last 3 elements in the array *****");
const lastThree = fruits.slice(fruits.length - 3); 
console.log(lastThree);



