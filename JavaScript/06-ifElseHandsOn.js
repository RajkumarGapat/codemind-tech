var checkEvenOrOdd = function (num) {
  if (num % 2 == 0) {
    return "EVEN";
  } else {
    return "ODD";
  }
};
var result = checkEvenOrOdd(45);
console.log(`The number 45 is: ${result}`);
var result = checkEvenOrOdd(70);
console.log(`The number 70 is: ${result}`);
var result = checkEvenOrOdd(67);
console.log(`The number 67 is: ${result}`);
var result = checkEvenOrOdd(98);
console.log(`The number 98 is: ${result}`);

console.log("");
console.log("***** Vote Eligibility *****");
var voteEligibilty = function (age) {
  if (age >= 18) {
    console.log(`Age is ${age} & eligible for vote`);
  } else {
    console.log(`Age is ${age} & not eligible for vote`);
  }
};
voteEligibilty(18);
voteEligibilty(20);
voteEligibilty(17);
voteEligibilty(40);

console.log("");
console.log("***** String length check *****");
var checkStringLength = function (str) {
  if (str.length > 10) {
    console.log(`String is "${str}" & has more than 10 characters`);
  } else {
    console.log(`String is "${str}" & does NOT have more than 10 characters`);
  }
};
checkStringLength("JavaScript - ES6");

console.log("");
console.log(`***** Check string starts with "JAVA" *****`);
var startsWithJava = function (str) {
  if (str.startsWith("Java")) {
    console.log(`The given string is "${str}" & starts with "Java"`);
  } else {
    console.log(`The given string is "${str}" & does NOT start with "Java"`);
  }
};
startsWithJava("JavaScript Language");
startsWithJava("Programming Language");

console.log("");
console.log(`***** TCS Interview *****`);
var tcsInterview = function (gradScore, hscScore, sscScore, candidateName) {
  if (gradScore >= 70 || hscScore >= 80 || sscScore > 90) {
    console.log(`Congrats ${candidateName} you are eligible for TCS interview`);
  } else {
    console.log(
      `Sorry. ${candidateName} you are not eligible for TCS interview`
    );
  }
};
tcsInterview(80, 86, 90, "Stew");
