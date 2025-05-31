 const arrayNumbers = [ 20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ];
console.log("------------- Original Array -------------");
console.log(arrayNumbers);

console.log("------------- Array after addition of 10 in each element -------------");
const arrayTrans = arrayNumbers.map((element)=>{
    return element+10;
});
console.log(arrayTrans);

console.log("------------- Cube of each element -------------");
const arrayCube = arrayNumbers.map((element)=>{
    return element**3;
});
console.log(arrayCube);

console.log("------------- Add index to each element -------------");
const addedIndex = arrayNumbers.map((element, index)=>{
    return element+index;
});
console.log(addedIndex);