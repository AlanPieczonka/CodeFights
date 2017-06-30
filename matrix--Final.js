function matrixElementsSum(matrix) { //replaces necessary elemnts with 'x'
    for(j=0; j<matrix.length; j++){
        console.log(matrix[j]);
          for(i=0; i<matrix[j].length; i++){
            console.log(matrix[j][i]);
            if(matrix[j][i]===0){
                for(k=j; k<matrix.length; k++){
                  matrix[k].splice(i, 1, 'x');
                }
            }
          }
    }
    
  
  
function remove(arr, what) { //removes 'x' from array
    var found = arr.indexOf(what);

    while (found !== -1) {
        arr.splice(found, 1);
        found = arr.indexOf(what);
    }
}

for(l=0; l<matrix.length; l++){
  remove(matrix[l], 'x');
}

function arrSum(arr) { //returns the sum of the array 
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'object')
      sum += arrSum(arr[i]);
    else
      sum += arr[i];
  }
  return sum;
}

  return arrSum(matrix);

}

matrixElementsSum(
[[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]]
);
