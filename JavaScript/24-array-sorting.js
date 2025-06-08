const array = ["Jenny", "Bill", "Stew", "Elon"];
console.log("===== Sorted an array in ascending order ======");
array.sort(); // Sorted an array in ascending order
console.log(array);


console.log("==== Reverse the array =======");
array.reverse();
console.log(array);
 
console.log("==== Array of numbers ===========");
console.log("===== Sorting an array in ascending order =====");
const arrayOne = [3, 401,777, 9, 1111, 29, 8 ];
arrayOne.sort((a, b)=>{
    return a > b ? 1 : -1;
});
console.log(arrayOne);

 
console.log("====== Sort array in descending order =========");
arrayOne.reverse();
console.log(arrayOne);

 
console.log("---------------------------------");
const arrayTwo = [3, 401,777, 9, 1111, 29, 8 ];
arrayTwo.sort((a, b)=>{
    return a > b ? -1 : 1;
});
console.log(arrayTwo);