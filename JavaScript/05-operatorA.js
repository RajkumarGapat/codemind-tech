function squareOfWordLength(word) {
  var strwords = word.split(" ");
  var wordlength = strwords.length;
  var squareOfWords = wordlength * wordlength;

  console.log(`The given word is: "${word}", its length is: ${wordlength}, and its square is: ${squareOfWords}`);
}

function f3() {
    var str = "I am MERN Stack Developer";
    var strLength = str.length;
    var words = str.split(" ");
    var totalWords = words.length;

    var divResult = strLength / totalWords;

    var multiResult = strLength * totalWords;

    console.log("");
    console.log(`Given string is: "${str}", Length of the string is: ${strLength} & Total number of words in string is: ${totalWords}`);
    console.log(`Result of string length divided by word count: ${divResult}`);
    console.log(`Result of string length multiplied by word count: ${multiResult}`);
  }
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Web Developer Smart");
f3();
