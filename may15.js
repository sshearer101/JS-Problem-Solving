// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

// Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.

// Examples
// 1      => null
// 25     => null
// 36     => 36
// 1244   => 12
// 952406 => 9


const prevMultOfThree = n => {
    console.log(n)
    const length = n.toString().split('').length
    console.log(length)
    if (length == 1 && n % 3 !== 0){
      return null
    }
    else if (n % 3 === 0){
      return n
    } else {
     
    for (let i =1; i<length; i++){
      console.log(i, 'xsfddf')
  console.log( n.toString().split('').slice(0, -i).join(''))
      console.log(( n.toString().split('').slice(0, -i).join('')) %3 ===0)
     if (( n.toString().split('').slice(0, -i).join('')) %3 ===0){
       console.log('yuppp')
       return Number(n.toString().split('').slice(0, -i).join(''))
     } else if (i == length-1){
       return null
     }
     
    }
      }
  }