

function countPositivesSumNegatives(input) {
    const newArray = []
    let positive = 0
    if (input == null || input == ''){
      return newArray
    }else {
   for(let i=0; i<input.length; i++){
     if (input[i] > 0){
       positive++
     }}
      newArray.push(positive)
   newArray.push(input.filter((num)=> {
      if ( num <0){ return num }}).reduce(function(a, b ){
   return a + b
   }, 0))
  return newArray
      }
  }
  