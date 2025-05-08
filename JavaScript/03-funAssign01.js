console.log("***** Functions with no argument & no return type ***** ");
function f1(){
    console.log("Hi, Tell me about yourself?");
}

function f2(){
    console.log("How should I answer this question?");
}
f1();
f2();

console.log("");
console.log("***** Function with argument *****");
function personalDetails(firstName, lastName, collegeName) {
    console.log("My first name is ",firstName);
    console.log("My last name is ",lastName);
    console.log("My college name is ",collegeName);  
}
personalDetails("Rajkumar", "Gapat", "MIT University");

console.log("");
console.log("***** Function for addition of three values *****");
function addThreeValues(val1, val2, val3) {
    console.log(val1 + val2 + val3);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", "  Good", "  Morning"); 
