const is_prime = (n) => {
  if (n <= 3) {
    return n > 1;
  } else if (n % 2 == 0 || n % 3 == 0) {
    return false;
  }

  let i = 5;

  while (i * i <= n) {
    if ((n % i == 0) | (n % (i + 2) == 0)) {
      return false;
    }
    i = i + 6;
  }

  return true;
};

console.log(is_prime(13), true)