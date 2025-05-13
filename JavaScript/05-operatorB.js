console.log("***** greatest Number *****");
function greaterNumber(numOne, numTwo) {
  var result = numOne > numTwo ? numOne : numTwo;
  console.log(`Greater number between ${numOne} & ${numTwo} is: ${result}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log("");
console.log("***** Odd Even Number Check *****");
function isEvenOrOddNum(num) {
  var result = num % 2 == 0 ? true : false;
  return result;
}
var returnValue = isEvenOrOddNum(29);
console.log(`Is 29 even : ${returnValue}`);
var returnValue = isEvenOrOddNum(44);
console.log(`Is 44 even : ${returnValue}`);
var returnValue = isEvenOrOddNum(0);
console.log(`Is 0 even : ${returnValue}`);
var returnValue = isEvenOrOddNum(101);
console.log(`Is 101 even : ${returnValue}`);


console.log("");
console.log("***** Even Odd word length check *****");
function wordLength(word) {
    var length = word.length;
    var result = length % 2 === 0 ? "EVEN" : "ODD";
    console.log(`The given word is "${word}", its length is ${length} & it is "${result}" length`);
    return result;
}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");