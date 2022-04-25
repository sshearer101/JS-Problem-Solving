// DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

// But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

// *should work also on Leading and Trailing Spaces and caps.

// "apple"            => "Apple"
// "apple of banana"  => "Apple of Banana"
// "one   space"      => "One   Space 
// "   space WALK   " => "   Space Walk   " 

function dropCap(n) {
    const newArray = n.split(' ')
   
    const finalArray = []
    
    for (let x = 0; x<newArray.length; x++){
      
      if(newArray[x].length > 2){
   
        finalArray.push(newArray[x].charAt(0).toUpperCase() + newArray[x].toLowerCase().slice(1))
      }
      else{
        finalArray.push(newArray[x])
      }
    }
    
  return finalArray.join(' ')
  }

  //alternative versions

  function dropCap(n) {
    const newArray = n.split(' ')
   return newArray.map((a, i) => (a.length > 2 ? a.charAt(0).toUpperCase() + a.toLowerCase().slice(1) : a)).join(' ')
  }


//   Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

//   Example:
//   ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]


  function removeEveryOther(arr){
  
    const finalArray = []
    
    for (let x = 0; x<arr.length; x++){
      if (x % 2 === 0){
        finalArray.push(arr[x])
      }
    }
    return finalArray
  }
  
  

//   Given two numbers x and n, calculate the (positive) nth root of x; this means that being r = result, r^n = x
// x = 4     n = 2  -->  2    # the square root of 4 is 2     2^2 = 4
// x = 8     n = 3  -->  2    # the cube root of 8 is 2       2^3 = 8
// x = 256   n = 4  -->  4    # the 4th root of 256 is 4      4^4 = 256
// x = 9     n = 2  -->  3    # the square root of 9 is 3     3^2 = 9
// x = 6.25  n = 2  -->  2.5  #     

  function root(x, n) {
  
    return x ** (1/n)
  }