function staircase(n) {
  let str = "#";
  for (let i = 1; i <= n; i++) {
    console.log(str.repeat(i).padStart(n));
  }
}

staircase(5);
