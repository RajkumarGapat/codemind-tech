
console.log("**** Function with no arguments and no return value ****");

function dayOfTheWeek(){
    console.log("Today is Monday");  
}
dayOfTheWeek();
dayOfTheWeek();

console.log("");
console.log("**** Function with arguments and no return value ****");

function addition(n1 , n2, n3){
    var result = n1 + n2 + n3;
    console.log(result);
}
addition(10, 20, 30);
addition(10.10, 20.20, 30.30);

console.log("");
console.log("**** Function with arguments and return value ****");

function square(num) {
    var result = num * num;
    return result
}
var squareValue = square(15);
console.log('Square is:', squareValue);

var returnValue = square(11);
console.log('Square is:', returnValue);


