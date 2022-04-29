
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].



function countPositivesSumNegatives(input) {
    const newArray = []
    let positive = 0

    //make sure input is readable array
    if (input == null || input == ''){
      return newArray
    }else {

    //sum positive numbers and use count in positive variable
   for(let i=0; i<input.length; i++){
     if (input[i] > 0){
       positive++
     }}
      newArray.push(positive)

      //filter to get negative numbers
      // reduce negatives to sum them together
      //push into newarray
   newArray.push(input.filter((num)=> {
      if ( num <0){ return num }}).reduce(function(a, b ){
   return a + b
   }, 0))
  return newArray
      }
  }
  