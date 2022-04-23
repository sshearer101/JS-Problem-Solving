// The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.
// In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.
// You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets

// Example:

// ["PT92", 6] => 2 (6 streets 3 bullets each)
// ["M4A1", 6] => 1

// The return Will always be an integer so as the params.


function magNumber(info){
  
    let bulletsAvailable = 0
    let mag = 0
    
    
   if (info[0] === "PT92"){
     bulletsAvailable = 17
     mag = Math.ceil((info[1] * 3) / bulletsAvailable)
   }
      else if (info[0] === "PSG1"){
     bulletsAvailable = 5
     mag = Math.ceil((info[1] * 3) / bulletsAvailable)
  
    }
      else {
     bulletsAvailable = 30
     mag = Math.ceil((info[1] * 3) / bulletsAvailable)
  
    }
    return mag
  }


//alternative 

  function magNumber(info){
    const weapons = {
      PT92: 17,
      M4A1: 30,
      M16A2: 30,
      PSG1: 5,
    }
  //   console.log(info)
  //   console.log(weapons[info[0]])
  //   console.log(weapons["PT92"])
    return Math.ceil((info[1] * 3) / weapons[info[0]])
  }
