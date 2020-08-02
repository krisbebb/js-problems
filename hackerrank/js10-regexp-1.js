function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */

  const str = "abcdeaba";
  const re = /^([aeiou]).*\1$/;
  console.log(re.test(str));
  /*
   * Do not remove the return statement
   */
  return re;
}

regexVar()