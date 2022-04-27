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