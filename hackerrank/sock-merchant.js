// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let pairs = 0;
  const sockCounts = ar.reduce((sockCounts, sockColour) => {
    sockCounts[sockColour] = sockCounts[sockColour] + 1 || 1;
    return sockCounts;
  }, {});
  for (let count in sockCounts) {
    pairs += Math.floor(sockCounts[count] / 2);
  }
  return pairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]), 3);
console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]), 4);
