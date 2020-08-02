function longest(s1, s2) {
    const seen = {}
    unique = []
    const s3 = s1 + s2
    for (let i = 0; i < s3.length; i ++) {
        const number = s3[i]
       if (!seen[number]) {
           seen[number] = true
            unique.push(number)
       }
    }
    return unique.sort().join('')
}

console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty");
console.log(longest
  ("loopingisfunbutdangerous", "lessdangerousthancoding"),
  "abcdefghilnoprstu"
);
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy");
