// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

// Examples
// ("hello", "world", "l")       ==>  "held"
// ("coding", "anywhere", "n")   ==>  "codinywhere"
// ("jason", "samson", "s")      ==>  "jasamson"
// ("wonderful", "people", "e")  ==>  "wondeople"


function stringMerge(string1, string2, letter){
    const firstString = string1.split('')
    const secondString = string2.split('')
    
   let first = ''
         

   //first for loop 
   //variable will equal all elemnts of array until letter is reached
   //loop ends once letter is reached with break
   for (let i = 0; i<firstString.length; i++){
     if(firstString[i] !== letter){
       first += firstString[i]
      
     }
   else{
     break;
   }
   }
   //second for loop
   // when loop hits letter, splice through second string
   // splice will take the first number as index, and in this case [0], and mutate the array to remove x amount of indexes
   // In this case, x would equal the number until the letter is found, so those letters would be removed from secondString
   // Once those letters are removed, the loop breaks
   for (let x = 0; x<secondString.length; x++){
     if (secondString[x] === letter){
       
       secondString.splice(0, x)
   
       break;
     }
   }
   // return the first and the second strings together, while joining the array
      return (first + secondString.join(''))
   }
   
   //alternative solution



   //slice(0, number) --> this will be starting at index[0] and going to number. It keeps everything between.
        // In this slice it finds the index of the letter, and keeps every letter until that index
   //In the second slice(letter), it deletes everything up to that number. 
        //It finds the index of letter, and deletes everything leading up to it. 
   function stringMerge(string1, string2, letter) {
    return string1.slice(0, string1.indexOf(letter)) + string2.slice(string2.indexOf(letter));
    
  }


//   Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.


  class Kata {
    static getVolumeOfCuboid(length, width, height) {
     return (length * width * height)
  }
  }


//   Given a random string consisting of numbers, letters, symbols, you need to sum up the numbers in the string.

// Note:

// Consecutive integers should be treated as a single number. eg, 2015 should be treated as a single number 2015, NOT four numbers
// All the numbers should be treaded as positive integer. eg, 11-14 should be treated as two numbers 11 and 14. Same as 3.14, should be treated as two numbers 3 and 14
// If no number was given in the string, it should return 0
// Example:

// str = "In 2015, I want to know how much does iPhone 6+ cost?"


//match finds the values that equal that. In this case, it is finding all of the values that equal a number by using regex
//Then it is mapped, and reduced to have all of the values added together, starting at zero.

  function sumFromString(str){
    return (str.match(/\d+/g) || []).map(Number).reduce((a, b) => a + b, 0)
  }