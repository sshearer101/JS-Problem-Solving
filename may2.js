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