let array = [50, 40, 20, 80, 30];
 let sum = 0;
for (const element of array) {
    console.log(element);
    sum = sum + element;
}
console.log(`Sum is: ${sum}`);

console.log("======== join() ===========");
let arrayNum = [50, 40, 20, 40, 80, 30 ];
console.log(typeof arrayNum);
const joinedElement = arrayNum.join("-");
console.log(joinedElement);
console.log(typeof joinedElement);


console.log("======== concat() ===========");
const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];
const arrayConcat = arrayOne.concat(arrayTwo).concat(arrayNum);;
console.log(arrayConcat);

