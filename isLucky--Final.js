function isLucky(n) {
  n = n.toString();
  
  var firstHalf = n.substring(0, (n.length/2));
  var secondHalf = n.substring((n.length/2), n.length);
  
  
  console.log(firstHalf);
  console.log(secondHalf);
  
  let firstHalfSum = 0;
  let secondHalfSum = 0;
  
  for(let i=0; i<firstHalf.length; i++){
      firstHalfSum = +firstHalfSum + +firstHalf[i];
  }
  
  for(let i=0; i<firstHalf.length; i++){
      secondHalfSum = +secondHalfSum + +secondHalf[i];
  }
  
  console.log(firstHalfSum);
  console.log(secondHalfSum);
  
  console.log(firstHalfSum === secondHalfSum);
  return (firstHalfSum === secondHalfSum);
  
}

isLucky(134008);