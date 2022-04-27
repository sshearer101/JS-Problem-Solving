// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

// function add(num) {
//   return num + 1;
// }

// function mult(num) {
//   return num * 30;
// }

// chain(2, [add, mult]);
// returns 90;



// two parts of reducer (accumulator, current value), value at end

//const numbers = [1, 2, 3, 4, 5]
// numbers.reduce(function myFunc (total, num){
//     return   total + num
// }, initial value)

//
// will start at initial value which can be set to 0, then will add num to update total


function chain(x, fns) {
    return fns.reduce(function(x, fn) {
      return fn(x)
    }, x)
  }

//Another reduce example 

function sum(array) {
    return array.reduce(function (a, b) {return a + b})
  }
  
  function sum(array) {
    return array.reduce((a,b) => {return a + b})
  }
  

//   You must use the .reduce() method within your answer

// Three sisters run Goodness Gracious Green (a shop selling all things green and lovely).
// Since opening, they've struggled to agree on the sale cost of products. One believes costs should be kept as low as possible, the middle sister wants to keep an average price and the eldest thinks that they should charge more for their one-of-a-kind green things.

// Your task is to create a function called bestPrice which will take an array of 3 prices which should be averaged to return the best and final price.

// With your help the sisters can put an end to their fights once and for all!

// Things to note:

// Prices will be in pence and cannot be negative
// Prices will be given as a number, not a string
// You must use the .reduce() method within your answer

  function bestPrice(array) {
    return (array.reduce(function (a, b) {return a + b})/array.length)
    }





    // You have a string of length n consisting of zeroes and ones. Consider the following operation:

    // Choose any two adjacent positions in the string
    // If one of them is 0, and the other one is 1, 
    // remove these two digits from the string.
    // What is the length of the smallest string that you can get after applying this operation multiple times?
    
    // Example
    // For s = "01010", the result should be 1.
    
    // "01010" -> " 010" -> " 0"
    
    // For s = "110100", the result should be 2.
    
    // "110100" -> "1 100" -> "1 0"
    
    // Note that after the operations, the remaining digits are separated by spaces and thus not adjacent ;-)


    //if index and index + 1 equal each other, add to out
    // or change the loop to increase to index + 2 and index + 3
    //and loop through again
    function zeroAndOne(s) {
        let out = 0;
        for (let i = 0; i < s.length; i++){
           if (s[i] === s[i+1] || i === s.length-1){
              out++;
            }
         else{
              i++;
         }
        }
        return out;
      }