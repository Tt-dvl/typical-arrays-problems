
exports.min = function min (array) {
  let minimum = 0;
  let arrayLength = array.length;

  if (arrayLength > 0){

  function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1; 
  }

  array.sort(compare);

  minimum = array[0];

  return minimum;
  }else 
  
  return minimum;
}

exports.max = function max (array) {
  let maximum = 0;
  let arrayLength = array.length;
  
  if (arrayLength > 0){
  
  function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1; 
  }
  
  array.sort(compare);
  
  for (let i = 0; i < arrayLength; i++) {
    maximum = array[i];
  }
  
  return maximum;
  }else 
  
  return maximum;
}

exports.avg = function avg (array) {
  let average = 0;
  let arrayLength = array.length;

  if (arrayLength > 0){

  let result = array.reduce((sum, current) => sum + current, 0); 

  average = result/arrayLength;

  return average;
  }else 

  return average;
}