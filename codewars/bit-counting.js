var countBits = function(n) {
    return n.toString(2).split('').reduce((count, binaryNum) => {
        if (binaryNum == 1) {
            count++
        }
        return count
    }, 0)
  };


  console.log(countBits(1234), 5);
  // 10011010010
  console.log(countBits(0), 0);
  console.log(countBits(4), 1);
  console.log(countBits(7), 3);
  console.log(countBits(9), 2);
  console.log(countBits(10), 2);