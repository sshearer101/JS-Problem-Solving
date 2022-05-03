//   Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].


function solution(A) {
    
    const array = A.sort()
    let smallest = 1

    for (let i in A){
        if (A[i] > -1 && A[i] === smallest){
            smallest++
        }
    }
    return smallest
}



function solution(A, K) {
    var n = A.length;
    for (var i = 0; i < n - 1; i++) {
        if((A[i] != A[i+1]) &&  (A[i] + 1) != A[i+1])
            return false;
    }
    if (A[0] != 1 || A[n - 1] != K)
        return false;
    else
        return true;
}








//bbaaab 
//3 char added

function solution(S) {
    // const array = S.split('')

    let count = 1
    let maxCount = 0
    let result = 0

    for (let i = 1; i<S.length; i++){
        if (S.charAt(i) != S.charAt(i-1)){
            maxCount = Math.max(maxCount, count)
           
        } else{
            count++
        }
    }

    maxCount = Math.max(maxCount, count)
    count = 1
    for (let i = 1; i<S.length; i++){
        if (S.charAt(i) != S.charAt(i-1)){
        result = result + maxCount - count
        count = 1
    }
    else{
        count++
    }

    }
    result = result + maxCount - count
    return result
}


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution() {
    // write your code in Javascript
    //
    // you can access DOM Tree using DOM Object Model:
    //    document.getElementsByTagName
    // or using jQuery:
    //    $('some_tag')
    //
    // please note that element.innerText is not supported,
    // you can use element.textContent instead.

    const arr = $('td').map(function(a) {
        let $td = $(this)
        return $td.css('background-color') !== $td.css('color') ? $td.text() : null}).get()
    return (arr.join(''))
}


// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums){
    if (nums === [] || nums === null){
      return []
    }
    else {
    return nums.sort(function(a, b) {return a-b})
    }
  }

  //alternative 

  function solution(nums){
    return (nums || []).sort(function(a, b){
      return a - b
    });
  }



//   For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
  
function bingo(a) {
    let bingo = [2, 7, 9, 14, 15]
    let each = (a.map((x) => x))
    console.log(a)
    console.log(each)
  
    for (let i = 0; i<a.length; i++){
      if (a.includes(2) && a.includes(7) && a.includes(9) && a.includes(14) && a.includes(15)){
    return "WIN"
  } else{
    return "LOSE"
  }
    }
}

//alternative bingo

function bingo(a) {
    return [2,9,14,7,15].every(x => a.includes(x)) ? "WIN" : "LOSE"
  }





//   Given a number, find the permutation with the smallest absolute value (no leading zeros).

// -20 => -20
// -32 => -23
// 0 => 0
// 10 => 10
// 29394 => 23499

  function minPermutation(n) {

    //before if statement
    //make it positive
    // split string
    // sort numbers by value
    const first = Math.abs(n)
    const next = first.toString().split('')
    
    const sortedArray = next.sort(function(a, b) {return a - b})
    

    if(sortedArray[0] == 0) {
        //if index 0 equals 0
      const smallstNum = sortedArray.findIndex(el => el > 0);
        // create variable to find the first index that has a value more than 0
      sortedArray[0] = sortedArray[smallstNum];
      // assigns the first index to that new value
      sortedArray[smallstNum] = 0;
      //assigns the index of that new value to 0
    }
    
    return sortedArray.join("") * Math.sign(n);
    // join the array to complete the number, and add the necessary math sign
  }


//   Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

