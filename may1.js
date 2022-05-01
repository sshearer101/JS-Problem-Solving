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
   let second = ''
         
   for (let i = 0; i<firstString.length; i++){
     if(firstString[i] !== letter){
       first += firstString[i]
      
     }
   else{
     break;
   }
   }
     
   for (let x = 0; x<secondString.length; x++){
     if (secondString[x] === letter){
       
       const answer = secondString.splice(0, x)
   
       break;
     }
   }
   
      return (first + secondString.join(''))
   }
   