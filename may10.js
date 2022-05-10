

function findDifference(a, b) {
    let cuboida = 0
    let cuboidb = 0
    for (let x = 0; x<2; x++){
      cuboida = a[0] * a[1] * a[2]
      cuboidb = b[0] * b[1] * b[2] 
    }
    return Math.abs(cuboida - cuboidb)
  }