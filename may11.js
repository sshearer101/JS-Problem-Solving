// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    let count = 0
    for (let x = 0; x<arr1.length; x++){
      count += arr1[x]
      count +=arr2[x]
    }
    return count
  }