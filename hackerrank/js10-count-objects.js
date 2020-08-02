function getCount(objects) {
  let count = 0;
  for (let object in objects) {
    if (objects[object].x == objects[object].y) {
        count++
    }
  }
  return count;
}

console.log(
  getCount([
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
    { x: 3, y: 4 },
    { x: 4, y: 5 },
  ])
, 2);
