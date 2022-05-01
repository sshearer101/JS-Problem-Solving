


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
   