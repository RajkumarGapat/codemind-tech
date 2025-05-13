console.log("***** Male marriage eligibility check *****");

function maleMarriageEligibility(gender, age, boyName) {
    var result = (gender == "Male" && age >= 21) ? `Hey ${boyName}, you are eligible for marriage.` : `Hey ${boyName}, you are not eligible for marriage.`;
    return result; 
}
var returnValue = maleMarriageEligibility("Male", 25, "Bill Gates");
console.log(returnValue);
var returnValue = maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log(returnValue);

console.log("");
console.log("***** Female marriage eligibility check *****");
function femaleMarriageEligibility(gender, age, girlName) {
    var result = (gender == "Female" && age >= 18) ? `Hey ${girlName}, you are eligible for marriage.` : `Hey ${girlName}, you are not eligible for marriage.`;
    return result; 
}
var returnValue = femaleMarriageEligibility("Female", 16, "Jenifer");
console.log(returnValue);
var returnValue = femaleMarriageEligibility("Female", 27, "Malinda Gates");
console.log(returnValue);


