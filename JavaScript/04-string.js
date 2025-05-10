var greet = "Good Morning";
console.log("***** Find the length of the string *****");
var greetLength= greet.length;
console.log(greet,"String length is :", greetLength);
console.log(`${greet} -- String length is : ${greetLength}`); // by variable substitution

console.log("");
console.log("***** charAt() *****");
var charAtIndex0 = greet.charAt(0);
console.log(`Char available at index 0 is : '${charAtIndex0}'`);
var charAtIndex7 = greet.charAt(7);
console.log(`Char available at index 7 is : '${charAtIndex7}'`);
var charAtLastIndex = greet.charAt(greet.length-1);
console.log(`Char available at last index is : '${charAtLastIndex}'`);

console.log("");
console.log("***** concat() *****");
var firstName = "Stew";
var lastName = " Jobs";
var result = firstName + lastName
console.log(`Concat strings using + operator ${result}`);
var result = firstName.concat(lastName).concat(" I am unique");
console.log(`Concat strings using concat(): ${result}`);

console.log("");
console.log("***** indexOf() *****");
var greet = "Good Morning";
var indexOfo = greet.indexOf("o");
console.log(`Index of char o : ${indexOfo}`);
var indexOfz = greet.indexOf("z");
console.log(`Index of char z : ${indexOfz}`);
var indexOfMorning = greet.indexOf("Morning");
console.log(`Index of substring "Morning" : ${indexOfMorning}`);

console.log("");
console.log("***** trim() *****");
var day = "  Today is Friday   ";
console.log(`Before trim length is : ${day.length}`);
var trimResult = day.trim();
console.log(`After trim length is : ${trimResult.length}`);
var totalRemovedSpaces = day.length - trimResult.length;
console.log(`Total spaces removed after trim() is : ${totalRemovedSpaces}`);

console.log("");
console.log(`***** includes() *****`);
var vowels = "aeiou";
var isOavailabe = vowels.includes("Ae");
console.log(isOavailabe);

console.log("");
console.log(`***** slice() *****`);
var greet = "Good Morning my buddy How are you!";
var sliceFive = greet.slice(5);
console.log(sliceFive);
var sliceTwo = greet.slice(2, 10);
console.log(sliceTwo);

console.log("");
console.log(`***** split() *****`);
var greet = "Good Morning my buddy How are you!";
var words = greet.split(" ");
console.log(words);
var str = "My Life My Rule";
var strWords  = str.split(" ");
console.log(strWords);
console.log(strWords.length);







