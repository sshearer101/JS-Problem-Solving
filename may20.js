function distinct(a) {
    //   for(let i = 0; i<a.length; i++){
    //     for(let x = 1; x<a.length - 1; i++)
    //     if (a[i] === a[x]){
    //       return (a[x] )
    //     }
    //   }
      
      return([...new Set(a)])
    }