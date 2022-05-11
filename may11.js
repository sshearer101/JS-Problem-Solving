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


  //alternative 

  function arrayPlusArray(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);
  }



//   To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: the sides must be integers

  var cubeChecker = function(volume, side){
    if (side * side * side === volume && volume > 0){
      return true
    } else{
      return false
    }
  }