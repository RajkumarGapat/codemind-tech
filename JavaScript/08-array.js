let array = [50, 40, 20, 40, 80, 30];
console.log(array);

console.log("***** Array's Length *****");
const arrayLength = array.length;
console.log(arrayLength);


console.log("***** Access or Read *****");
const elementAt3 = array[3];
console.log(elementAt3);

console.log("***** Last Element *****");
let lastElement = array [array.length-1];
console.log(lastElement);

console.log("***** Update using index *****");
console.log(array);
array[1] = 101
console.log(array);

console.log("=====  Traversing Array =====");
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

console.log("===== Add or insert element at the end of the array =====");
array.push(909);
console.log(array);

console.log("===== Add or insert element at the beginning of the array =====");
array.unshift(333);
console.log(array);

console.log("===== Remove element at the end of the array =====");
array.pop();
console.log(array);

console.log("===== Remove element at the beginning of the array =====");
array.shift();
console.log(array);

console.log("====== Log only even elements from the array ======");
let arr = [1, 30, 9, 70, 50, 44, 3]
let sum = 0;
for (let index = 0; index < arr.length; index++) {
    
    const element = arr[index];
    if (element%2==0) {
        console.log(element);
        // sum = sum + element;
    }
}

console.log("====== slice ======");
let arrayNum = [1, 30, 9, 70, 50, 44, 3]
const sliceFrom2 = arrayNum.slice(4);
console.log(sliceFrom2);
const sliceFrom3To6 = arrayNum.slice(3, 6);
console.log(sliceFrom3To6);  


console.log("====== splice ======");
let arrayNums = [1, 30, 9, 70, 50, 44, 3]
const returnValues = arrayNums.splice(4);
console.log(arrayNums);
console.log(returnValues);


console.log("====== Delete elements with count ======");
let arrayNumber = [1, 30, 9, 70, 50, 44, 3]
const deletedElements = arrayNumber.splice(4, 2);
console.log(deletedElements);
console.log(arrayNumber);

console.log("====== Add or insert elements without deleting or replacing existing elements ======");
let arrayNumbers = [1, 30, 9, 70, 50, 44, 3]
arrayNumbers.splice(2, 0, 77);
console.log(arrayNumbers);




