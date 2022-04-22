// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript


// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]


function humanYearsCatYearsDogYears(humanYears) {
    const newArray = []
    
      
    let catYears = 0
    let dogYears = 0
    
    let cat = 15 + 9 + ((humanYears-2) * 4)
    let dog = 15 + 9 + ((humanYears-2) * 5)
  
  if(humanYears === 1){
    newArray.push(1, 15, 15)
  }  
  else if(humanYears === 2){
    newArray.push(2, 24, 24)
  }
  else if (humanYears > 2){
    newArray.push(humanYears, cat, dog)
  }
}



// https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript

// Write a function that returns a string in which firstname is swapped with last name.


function nameShuffler(str){
  
    return str.split(' ').reverse().join(' ')
    
  }
  



//   A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal 
//   to the original number. If this seems confusing, refer to the example below.
// Ex: 153, where n = 3 (number of digits in 153)
// 13 + 53 + 33 = 153

// Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number.

  function isNarcissistic(n){
    const newString = n.toString().split('')
    
    let count = 0
    
    for (let i = 0; i< newString.length; i++){
      
      count += ((newString[i]) ** (newString.length))
      
      }
    
  if(count === n){
    return true;
  }
    else{
      return false
    }
  }