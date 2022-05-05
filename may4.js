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

function giveChange(amount) {
    var arr=[0,0,0,0,0,0]
    while (amount>=100)
    {
      arr[5]++;
      amount-=100;
    }
    while (amount>=50)
    {
      arr[4]++;
      amount-=50;
    }
    while (amount>=20)
    {
      arr[3]++;
      amount-=20;
    }
    while (amount>=10)
    {
      arr[2]++;
      amount-=10;
    }
    while (amount>=5)
    {
      arr[1]++;
      amount-=5;
    }
    while (amount>=1)
    {
      arr[0]++;
      amount--;
    }
    return arr;
  }


  //alterntive 

  const giveChange = amount => [100, 50, 20, 10, 5, 1].map(a => 
    ([a, amount] = [Math.floor(amount/a), amount % a])[0]).reverse();



//create functions of math

    function add(a,b){
        return a+b
    }
    
    function divide(a,b){
        return a/b
    }
    
    function multiply(a,b){
        return a*b
    }
    
    function mod(a,b){
        return a % b
    }
       
    function exponent(a,b){
        return a ** b
    }
        
    function subt(a,b){
        return a - b
    }


//     Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"


function shortcut (string) {
    const vowels = ["a", 'e', 'i', 'o', 'u']
    
    return string.split('').map((x) => x === "a" || x === "e" || x === "i" || x === "o" || x === "u" ? '' : x).join('')
  }

//   alternative

function shortcut(str) {
    return str.split('').filter(function(e) {
      return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
      //indexOf(e) == -1 
      //if it is not in the vowel array that is returned, then it is a -1
      // "e" is 1 and "o" is 3 in "hello" since that is their indexes, while all the consonants are -1
    }).join('')
  }


  //Given a number N, determine if the sum of N consecutive numbers is odd or even.

// If the sum is definitely an odd number, return Odd.
// If the sum is definitely an even number, return Even.
// If the sum can be either odd or even ( depending on which first number you choose ), return Either.
// Examples
// Odd_or_Even(1) should return Either, because the sum can be odd or even.
// Odd_or_Even(6) should return Odd, because 6 consecutive numbers contain 3 odd and 3 even numbers, so their sum is always odd.
// Odd_or_Even(8) should return Even, because 8 consecutive numbers contain 4 odd and 4 even numbers, so their sum is always even.
// Note
// const ODD = "Odd";
// const EVEN = "Even";
// const EITHER = "Either";


function oddOrEven(n) {
  
    let oddNum = 0
    let meow = n/2
    
    if (n % 2 === 1){
     return "Either"
    }
    else if (meow % 2 == 1){
      return "Odd"
    } 
    else{
      return "Even"
    }
  }

  //alternative 

  function oddOrEven(n) {
    return n % 2 ? EITHER : n / 2 % 2 ? ODD : EVEN
  }