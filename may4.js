// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n){
    const array = []
    
    for (let x = 0; x<=n; x++){
      array.push(2 ** x)
    }
    return array
  }
  

  //alternative 

  function powersOfTwo(n) {
    return Array.from({length: n + 1}, (v, k) => 2 ** k);
  }


//   Create a function that will take any amount of money and break it down to the smallest number of bills as possible. Only integer amounts will be input, NO floats. This function should output a sequence, where each element in the array represents the amount of a certain bill type. The array will be set up in this manner:

// array[0] ---> represents $1 bills

// array[1] ---> represents $5 bills

// array[2] ---> represents $10 bills

// array[3] ---> represents $20 bills

// array[4] ---> represents $50 bills

// array[5] ---> represents $100 bills

// In the case below, we broke up $365 into 1 $5 bill, 1 $10 bill, 1 $50 bill, and 3 $100 bills.

// giveChange(365) // =>  [0,1,1,0,1,3]
// In this next case, we broke $217 into 2 $1 bills, 1 $5 bill, 1 $10 bill, and 2 $100 bills.

// giveChange(217) // => [2,1,1,0,0,2]