function reverseParentheses(s) {
  if(!s.includes('(')){
    return s;
  }
  
  const howManyParentheses = s.split('(').length - 1;
  
  for(let i=0; i<howManyParentheses; i++){
    s = reverse(s);
  }
  
  function reverse(s){

    const regExp = /\(([^()]*)\)/i;
  
    let reversePart = regExp.exec(s)[1]; //part to reverse 
    
    reversePart = reversePart.split("").reverse().join(""); //reverse process
    
    s = s.replace(regExp, reversePart);
    
    return s;
  }
  
  console.log(s);
  return s;
}

reverseParentheses("abc(cba)ab(bac)c");