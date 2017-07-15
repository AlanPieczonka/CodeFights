function commonCharacterCount(s1, s2) {
  var s1arr = s1.split(''); //string to array
  var s2arr = s2.split(''); //string to array 
  
  let count = 0;
  console.log(s1arr);
    console.log(s1arr.length);
  console.log(s2arr);
    console.log(s2arr.length);

    for(let i=0; i<s1arr.length; i++){
  	for(let j=0; j<s2arr.length; j++){
	  	if(s1arr[i] === s2arr[j]){
	  		count++;
	  		s1arr.splice(i, 1, 'word1'); //replaces element of array with 'word1' so if doesn't pass second time
	  		s2arr.splice(j, 1, 'word2');
	  	}
  }
}

  console.log("Count: " + count);
  
  return count;
}

commonCharacterCount("abca", "xyzbac");