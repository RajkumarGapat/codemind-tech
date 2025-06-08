 const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ];
console.log(arrayRollNumbers);

console.log("====== Reverse the array =======");
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);

console.log("====== Sorting without Custom Logic using sort() method =======");
arrayRollNumbers.sort();
console.log(arrayRollNumbers);

console.log("====== Ascending oreder by using Custom Logic =======");
arrayRollNumbers.sort((a, b)=>{
    return a > b ? 1 : -1;
});
console.log(arrayRollNumbers);

console.log("====== Greatest number in array =======");
const maxNum = Math.max(...arrayRollNumbers);
console.log(maxNum);

console.log("====== Smallest number in array =======");
const minNum = Math.min(...arrayRollNumbers);
console.log(minNum);

console.log("====== Removing duplicates from an array =======");
const newArray = [...new Set(arrayRollNumbers)];
console.log(newArray);

