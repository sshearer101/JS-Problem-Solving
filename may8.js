//    Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1)}).join(' ')
      }
 
      
      String.prototype.toJadenCase = function () {
        var words = this.split(' ');
      
        for(var i = 0, wordsLen = words.length; i < wordsLen; i++) {
          words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
      
        return words.join(' ');
      };



    //   This is a simple exercise to understand the feature in the javascript language called closure.

    //   The function buildFun will return an array of functions. The single parameter accepted by buildFun is the number of elements N of the array returned.
      
    //   The wanted outcome is that when all function in the array are executed, the number from 0 to N should be returned.

      function buildFun(n){

        var res = [];
      
        for (let i = 0; i < n; i++){
          res.push(function(){
            return i;
          });
        }
        
        return res;
      }





      function buildFun(n){

        var res = []
        
        function createFunction(index) {
          return function() {
            return index;
          };
        };
      
        for (var i = 0; i< n; i++){
          res.push(
            createFunction(i)
          )
        }
        
        return res
        
      }

      
      
    //   Closure Counter
    //   Define the function counter that returns a function that returns an increasing value.
    //   The first value should be 1.
    //   You're going to have to use closures.
    //   Example:
    //   const newCounter = counter();
    //   newCounter() // 1
    //   newCounter() // 2


      function counter(){
        let count = 1
        return function(){
          return count++
        }
       }
       

       //closure is a function inside another function that can call global variables defined in the parent function
       //it keeps methods private from the global scope, and makes changes locally
       