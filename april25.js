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