console.log("***** Arithmetic Operators *****");

var a = 10;
var b = 5;
result = a + b;
console.log(`Addition ${result}`);   //15

var result = a - b;
console.log(`Subtraction : ${result}`);  //5

var result = a / b;
console.log(`Division: ${result}`);  //2

var result = a % b;
console.log(`Modulus: ${result}`);   //0


console.log("");
console.log("***** Compasrision Operators *****");
var a = 10;
var b = 11;
var c = "10";
var d = 10;
console.log(`== Operator of a & b: ${a==b}`); //false
console.log(`== Operator of a & d: ${a==d}`); //true
console.log(`== Operator of a & c: ${a==c}`);  //true

console.log("");
console.log("***** (===) Operator *****");
console.log(`=== Operator of a & b: ${a===b}`); //false
console.log(`=== Operator of a & d: ${a===d}`); //true
console.log(`=== Operator of a & c: ${a===c}`); //false


console.log("");
console.log("*****!= Not Equal Operator *****  ");
var a = 10;
var b = 11;
var c = "10";
var d = 10;
console.log(`!= Not equal operator of a & b: ${a!=b}`);  // true
console.log(`!= Not equal operator of a & d: ${a!=d}`);  // false
console.log(`!= Not equal operator of a & c: ${a!=c}`);  // false

console.log("");
console.log("***** Less than (<) Operator *****  ");
console.log(`< Less than operator between a & b: ${a<b}`);  //true
console.log(`< Less than operator between a & d: ${a<d}`);  //false

console.log("");
console.log("***** Less than or equal (<=) Operator *****  ");
console.log(`<= Less than equal operator between a & b: ${a<=b}`);  //true
console.log(`<= Less than equal operator between a & d: ${a<=d}`);  //true

console.log("");
console.log("***** Greater than (>) Operator *****  ");
console.log(`> Greater than operator between a & b: ${a>b}`);  //false
console.log(`> Greater than operator between a & d: ${a>d}`);  //false

console.log("");
console.log("***** Greater than or equal (<=) Operator *****  ");
console.log(`>= Greater than equal operator between a & b: ${a<=b}`); // true
console.log(`>= Greater than equal operator between a & d: ${a<=d}`); //true 