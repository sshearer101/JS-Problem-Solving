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
  