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
