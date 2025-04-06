function findMinAndMaxValuesInArray(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return { min: min, max: max };
    
  }