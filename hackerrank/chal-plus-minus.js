function plusMinus(arr) {
    let posNums = 0, 
        posRatio = 0,
        negNums = 0, 
        negRatio = 0, 
        zeroNums = 0, 
        zeroRatio = 0

    const n = arr.length
    for (let i = 0; i < n; i++) {
        const number = arr[i]
        if (number > 0) {
            posNums++
        }
        if (number < 0) {
            negNums++
        }
        if (number == 0) {
            zeroNums++
        }
    }
    posNums ? posRatio = posNums / n : null
    negNums ? negRatio = negNums / n : null
    zeroNums ? zeroRatio = zeroNums / n : null
    
   console.log((posRatio).toFixed(6))
   console.log((negRatio).toFixed(6))
   console.log((zeroRatio).toFixed(6))
}


plusMinus([-4, 3, -9, 0, 4, 1]);
