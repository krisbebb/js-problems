function arrayDiff(a, b) {
  return a.filter((aNum) => b.every((bNum) => bNum != aNum));
}

console.log(arrayDiff([1, 2], [1]), [2]);
console.log(arrayDiff([1, 2, 2, 2, 3], [2]), [1, 3]);
console.log(arrayDiff([], [4, 5]), [], "a was [], b was [4,5]");
console.log(arrayDiff([3, 4], [3]), [4], "a was [3,4], b was [3]");
console.log(arrayDiff([1, 8, 2], []), [1, 8, 2], "a was [1,8,2], b was []");
