function stringHandsOn() {

  var str = "     Hey you are doing good,  keep it up      ";
  console.log(`The given string with extra spaces: "${str}"`);
  console.log(`Length of given string: ${str.length}`);

  console.log("");
  var trimmedStr = str.trim();
  console.log(`Trimmed string without extra spaces: "${trimmedStr}"`);
  console.log(`Length after trimming: ${trimmedStr.length}`);

  console.log("");
  var firstChar = trimmedStr.charAt(0);
  var lastChar = trimmedStr.charAt(trimmedStr.length - 1);
  console.log(`First character is: '${firstChar}', & Last character is: '${lastChar}'`);

  console.log("");
  var words = trimmedStr.split(" ");
  console.log(`Total number of words: ${words.length}`);

  console.log("");
  var indexOfGood = trimmedStr.indexOf("good");
  console.log(`Index of word "good": ${indexOfGood}`);

  console.log("");
  var subStr = trimmedStr.substring(22);
  console.log(`Substring starting from index 22: "${subStr}"`);

  console.log("");
  var endsWithUp = trimmedStr.endsWith("up");
  console.log(`Does the string end with "up"? ${endsWithUp}`);

  console.log("");
  var startsWithHey = trimmedStr.startsWith("Hey");
  console.log(`Does the string start with "Hey"? ${startsWithHey}`);
}
stringHandsOn();