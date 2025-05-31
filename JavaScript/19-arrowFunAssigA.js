console.log("------------- Arrow Functions -------------");
const greeting = () => {
  console.log("Good Morning, Today is Friday!");
};
greeting();

console.log("------------- Multiplication Functions -------------");

const multi1 = (n1, n2, n3 = 1) => {
  const result1 = n1 * n2 * n3;
  console.log(`Multiplication of ${n1}, ${n2}, ${n3} is: ${result1}`);
};
multi1(5, 5, 2);
multi1(10, 4);

console.log("------------- Addition Functions -------------");
const f1 = (n1, n2, n3, n4, n5) => {
  return n1 + n2 + n3 + n4 + n5;
};

const r1 = f1(100, 100, 200, 349, 756);
console.log(`Addition of given numbers: 100 + 100 + 200 + 349 + 756 = ${r1}`);

const r2 = f1("I am", " learning", " ES6", " features", " in depth");
console.log(`Addition of given string: ${r2}`);
