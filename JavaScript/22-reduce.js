const array = [1, 2, 4, 3, 6];
let sum = array.reduce((runningTotal, element)=>{
    return runningTotal + element;
}, 0);
console.log(`Sum is : ${sum}`);