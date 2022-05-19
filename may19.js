// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"



function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
  }




//   Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

//   For example: ["3:1", "2:2", "0:1", ...]
  
//   Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
  
//   if x > y: 3 points
//   if x < y: 0 point
//   if x = y: 1 point
//   Notes:
  
//   there are 10 matches in the championship
//   0 <= x <= 4
//   0 <= y <= 4
  


  function points(games) {
  
    let count = 0
    
    for (let x = 0; x<games.length; x++){
      const point = games[x].split('')
      console.log(point)
      if (point[0] > point[2]){
        count = count + 3
      } else if (point[0] === point[2]){
        count = count + 1
      } 
    }
        return count
  
  }

  //with reduce function

  const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)



  function elevator(left, right, call){
    if (call === left && call !== right){
      return "left"
    } else if (call > left && left > right){
      return "left"
    } else if (call < left && left < right){
      return "left"
    } else{
      return "right"
    }
    }