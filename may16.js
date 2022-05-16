// Ahoy Matey!

// Welcome to the seven seas.

// You are the captain of a pirate ship.

// You are in battle against the royal navy.

// You have cannons at the ready.... or are they?

// Your task is to check if the gunners are loaded and ready, if they are: Fire!

// If they aren't ready: Shiver me timbers!

// Your gunners for each test case are 2, 3 or 4.

// When you check if they are ready their answers are in a dictionary and will either be: aye or nay

// Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)

// If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!


const cannonsReady = (gunners) => {
 
    const response = Object.values(gunners) 
    
    let amount = 0
    
    for (let x = 0; x<response.length; x++){
      if (response[x] === 'aye'){
        amount++
      }
    }
    return amount === response.length ? "Fire!" : "Shiver me timbers!"
    }


    //alternative 

function cannonsReady(gunners){
        for (let i in gunners) {
            if (gunners[i] == "nay") {
              return "Shiver me timbers!"
            }
        }
      return "Fire!"
    }



    // My washing machine uses water amount of water to wash load (in JavaScript and Python) or max_load (in Ruby) amount of clothes. You are given a clothes amount of clothes to wash. For each single item of clothes above the load, the washing machine will use 10% more water (multiplicative) to clean.

    // For example, if the load is 10, the amount of water it requires is 5 and the amount of clothes to wash is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.
    
    // Write a function howMuchWater (JS)/how_much_water (Python and Ruby) to work out how much water is needed if you have a clothes amount of clothes. The function will accept 3 arguments: - water, load (or max_loadin Ruby) and clothes.
    
    // My washing machine is an old model that can only handle double the amount of load (or max_load). If the amount of clothes is more than 2 times the standard amount of load (max_load), return 'Too much clothes'. The washing machine also cannot handle any amount of clothes less than load (max_load). If that is the case, return 'Not enough clothes'.
    
    // The answer should be rounded to the nearest 2 decimal places.
    
    

    function howMuchWater(water, load, clothes){

        if (clothes > load * 2){
          return "Too much clothes"
        } else if(clothes < load){
          return "Not enough clothes"
        } else{
          return Number((water * (1.1 **(clothes - load))).toFixed(2))
        }
      }


      //alternative 

      function howMuchWater(water, load, clothes){
        if (clothes/load > 2) return 'Too much clothes'
        if (clothes < load) return 'Not enough clothes'
        return +(water * Math.pow(1.1, (clothes - load))).toFixed(2)
      }