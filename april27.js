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
  
  