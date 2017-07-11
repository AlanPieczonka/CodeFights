function allLongestStrings(inputArray) {

   const longestWord = inputArray.sort(function (a, b) { return b.length - a.length; })[0];

   inputArray = inputArray.filter( item => item.length == longestWord.length); 

   return inputArray;
}

allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]);
