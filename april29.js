
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
  

  //Alternative 

  function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}


// Odd bits are getting ready for Bits Battles.

// Therefore the n bits march from right to left along an 8 bits path. Once the most-significant bit reaches the left their march is done. Each step will be saved as an array of 8 integers.

// Return an array of all the steps.

// 1 <= n <= 8

// NOTE: n != 0, because n represents the number of 1s.

// Examples
// This resembles a simple 8 LED chaser:

// n = 3

// 00000111
// 00001110
// 00011100
// 00111000
// 01110000
// 11100000
// n = 7

// 01111111
// 11111110

function bitMarch (n) {
    console.log("n",n);
    var arr = [];
    for(var i = 7; i >= n-1; i--){
      var result =[0,0,0,0,0,0,0,0];
      for(var j = 0 ; j<n; j++){
        result[i-j] = 1;
      }
      arr.push(result);
    }
    return arr;
  }