console.log("***** Convert String or Boolean to Number using Number() *****");
console.log("");
let result;

result = Number('324');
console.log(`Number('324') = ${result}`);  
console.log("Reason: The string '324' is a valid number, so it is converted directly.");

result = Number('324e-1');
console.log(`Number('324e-1') = ${result}`);  
console.log("Reason: '324e-1' means 324 * 10^-1 → which is 32.4");

result = Number(true);
console.log(`Number(true) = ${result}`);  
console.log("Reason: In JavaScript, true becomes 1 when converted to a number.");

result = Number(false);
console.log(`Number(false) = ${result}`);  
console.log("Reason: false becomes 0 when converted to a number.");


console.log("");
console.log("***** Invalid string to number return NaN *****");

result = Number('hello');
console.log(`Number('hello') = ${result}`);  
console.log("Reason: 'hello' is not a numeric string, so it gives NaN.");


result = Number(undefined);
console.log(`Number(undefined) = ${result}`);  
console.log("Reason: undefined cannot be converted to a number.");

result = Number(NaN);
console.log(`Number(NaN) = ${result}`); 
console.log("Reason: NaN stays NaN. It means 'Not a Number'.");

console.log("");
console.log("***** String to number using + operator *****");
var numberInString = "100";
console.log(typeof numberInString);  

var myNumber = +numberInString;
console.log(typeof myNumber); 

console.log("");
console.log("***** number to string data type conversion using toString() method *****");
var myNumber = 100;
console.log(typeof myNumber); 

var afterConversion = myNumber.toString();
console.log(typeof afterConversion); 