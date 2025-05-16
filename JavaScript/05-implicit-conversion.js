console.log("***** Implicit conversion to String *****");
let result;

result = '3' + 2;
console.log(`'3' + 2 = ${result}`); 
console.log(`Reason: '3' is a string, so 2 is also converted to string and joined.`);

result = '3' + true;
console.log(`'3' + true = ${result}`); 
console.log(`Reason: true becomes "true" (string) and is added to '3' as string.`);

result = '3' + undefined;
console.log(`'3' + undefined = ${result}`); 
console.log(`Reason: undefined is converted to string and joined with '3'.`);

result = '3' + null;
console.log(`'3' + null = ${result}`); 
console.log(`Reason: null is converted to "null" and joined with '3' as string.`);


console.log("");
console.log("***** Implicit boolean conversion to Number *****");

result = '4' - true;
console.log(`'4' - true = ${result}`); 
console.log(`Reason: String '4' becomes number 4, true is 1, so 4 - 1 = 3`);

result = 4 + true;
console.log(`4 + true = ${result}`); 
console.log(`Reason: true becomes 1, so 4 + 1 = 5`);

result = 4 + false;
console.log(`4 + false = ${result}`); 
console.log(`Reason: false becomes 0, so 4 + 0 = 4`);



console.log("");
console.log("***** Implicit string conversion to Number *****");
result = '4' - '2';
console.log(`'4' - '2' = ${result}`); 
console.log(`Reason: Both strings are numeric, so JS converts them to numbers and does 4 - 2 = 2`);

result = '4' - 2;
console.log(`'4' - 2 = ${result}`); 
console.log(`Reason: '4' becomes number, then 4 - 2 = 2`);

result = '4' * 2;
console.log(`'4' * 2 = ${result}`); 
console.log(`Reason: '4' becomes number, then 4 * 2 = 8`);

result = '4' / 2;
console.log(`'4' / 2 = ${result}`); 
console.log(`Reason: '4' becomes number, then 4 / 2 = 2`);


console.log("");
console.log("***** Undefined used with number, boolean or null given NaN *****");
result = 4 + undefined;
console.log(`4 + undefined = ${result}`); 
console.log("Reason: You can't add number with undefined → Not a Number (NaN)");

result = 4 - undefined;
console.log(`4 - undefined = ${result}`);
console.log("Reason: 4 - undefined is not a valid number → gives NaN");

result = true + undefined;
console.log(`true + undefined = ${result}`); 
console.log("Reason: true becomes 1, but 1 + undefined is not valid → NaN");

result = null + undefined;
console.log(`null + undefined = ${result}`); 
console.log("Reason: null becomes 0, but 0 + undefined → NaN");


