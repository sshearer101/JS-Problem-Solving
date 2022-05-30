function findMissingNumber(sequence){
  
    let arr = sequence.split(" ");
    for(let i = 0; i < arr.length; i++){
      if(isNaN(arr[i])) return 1;
      arr[i] = parseInt(arr[i]);
    }
  
     arr.sort((a, b) => a-b);
    if(arr[0] > 1) return 1;
    for(let i = 0; i < arr.length-1; i++){
      if ((arr[i] + 1) !== (arr[i+1])){
        return arr[i] + 1
      }
    }
    
    return 0;
  }