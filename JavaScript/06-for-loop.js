for (let index = 1; index <= 10; index++) {
    console.log(index);    
}


console.log("***** Print the table of 2 *****");
for (let index = 2; index <= 20; index=index+2) {
    console.log(index);    
}
for (let index = 1; index <= 10; index++) {
    var result = index * 2;
    console.log(result);    
}

console.log("***** Print the table of 7 *****");
for (let index = 1; index <= 10; index++) {
    var result = index * 7;
    console.log(result);    
}

console.log("***** Print the numbers from 10 to 1 *****");
for(let index = 10; index>=1; index--){
    console.log(index);
}

console.log("***** Print the table of 11 in reverse order *****");
for (let index = 10; index >= 1; index--) {
    var result = index * 11;
    console.log(result);    
}

console.log("***** Table of 10 using while loop *****");
var index = 1;
while(index<=10){
    console.log(index *10);
    index++;
}

console.log("***** do while loop *****");
var index = 1; 
do {
    console.log(index);
    index++;
} while (index<=10);



while(false){
    console.log("Hello")
}

do {
    console.log("Hello");
} while (false)

var str = "Hello Buddy";
var strReverse = ""
for (let index = str.length-1; index >=0; index--){
    if(str.charAt(index))
    strReverse = strReverse + str.charAt(index);
}
console.log(strReverse);






