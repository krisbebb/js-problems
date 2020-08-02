function minimumSwaps(arr) { // timesout
  let swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == i + 1) {
      continue;
    } else {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] == i + 1) {
          swaps++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        continue;
      }
    }
  }
  console.log(arr)
  return swaps;
}



  function minimumSwaps(arr) {
    let swaps = 0;
    let l = arr.length;
    // Copy array
    const arr2 = [...arr];
    // Sorting the new array
    // It will be used to know what's the next value in the array
    // And swap if needed
    arr2.sort((a, b) => {
      if (a > b) return 1;
      else if (a < b) return -1;
      return 0;
    });
  
    // Create an object with values of our array as keys
    // and position in array as values
    const map = arr.reduce((acc, cur, i) => {
      acc[cur] = i;
      return acc;
    }, {});
  
  
    // Now we loop through the array
    for (let i = 0; i < l; i += 1) {
      const v1 = arr[i];
      const v2 = arr2[i];
      if (v2 != v1) {
        swaps += 1;
        // Use the map to avoid to compute each time the position
        const index = map[v2];
        // swap value
        arr[index] = v1;
        arr[i] = v2;
        // Update map
        map[v1] = index;
      };
    }
    return swaps;
  }


  function minimumSwaps(arr) {
    let swaps = 0;
    const sortedArray = [...arr];
    sortedArray.sort((a, b) => {
        if (a > b) return 1;
        else if (a < b) return -1;
        return 0;
      }) 
  
    const map = arr.reduce((mapObj, number, i) => {
      mapObj[number] = i;
      return mapObj;
    }, {});
  
    for (let unsortedIndex = 0; unsortedIndex < arr.length; unsortedIndex += 1) {
      const unsortedNum = arr[unsortedIndex];
      const sortedNum = sortedArray[unsortedIndex];
      if (sortedNum != unsortedNum) {
        swaps += 1;
        const correctIndex = map[sortedNum];
        [arr[correctIndex], arr[unsortedIndex]] = [arr[unsortedIndex], arr[correctIndex]]
        map[unsortedNum] = correctIndex;
      };
    }
    return swaps;
  }

console.log(minimumSwaps([4, 3, 1, 2]), 3);
console.log(minimumSwaps([2, 3, 4, 1, 5]), 3);
console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]), 3);
