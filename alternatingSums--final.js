function isEven(num){
  return num % 2 === 0;
}

function alternatingSums(a) {
  let teamOdd = 0;
  let teamEven = 0;
  
  a.forEach((element, index) => {
    if(isEven(index)){
      teamEven+=element;
    }else{
      teamOdd+=element;
    }  
  });
    
  const finalArray = [teamEven, teamOdd];

}

alternatingSums([50, 60, 60, 45, 70]);