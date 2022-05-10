// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

function findDifference(a, b) {
    let cuboida = 0
    let cuboidb = 0
    for (let x = 0; x<2; x++){
      cuboida = a[0] * a[1] * a[2]
      cuboidb = b[0] * b[1] * b[2] 
    }
    return Math.abs(cuboida - cuboidb)
  }


  //alternative 

  function find_difference(a, b) {
    return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2]);
  }

  //alternative 

  
  function find_difference(a, b) {
     function volume(c) {
    return c.reduce((x, y) => x * y);
  }
    return Math.abs(volume(a) - volume(b));
  }


//   We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new JavaScript Object or Python Dict setting the 'value' key on the new Object or Dict to the passed-in value.

// So, for example, if we execute the following code:

// wrapper_obj = wrap("my_wrapped_string"); 
//  # wrapper_obj should be  {"value":"my_wrapped_string"}
// We would then expect the following statement to be true:

// wrapper_obj["value"] == "my_wrapped_string"
// Unfortunately, the code is not working as designed. Please fix the code so that it behaves as specified.

function wrap(value) {
    return {value}
  }


//alternative 


  function wrap(value) {
    return  {
      "value":value 
    };
  }
  
  