// names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
// weights: [1, 4, 4, 5, 2, 1]

// PauL -> som = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54
// The *weight* associated with PauL is 2 so PauL's *winning number* is 54 * 2 = 108.

// If st is empty return "No participants".

// If n is greater than the number of participants then return "Not enough participants".
function rank(st, we, n) {
  if (!st) {
    return "No participants";
  }
  let names = st.split(",");
  if (n > names.length) {
    return "Not enough participants";
  }

  let result = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const nameArray = [name, name.toLowerCase(), we[i], name.length];
    result.push(nameArray);
  }

  result.forEach((person) => {
    for (let i = 0; i < person[1].length; i++) {
      const letter = person[1][i];
      person[3] += letter.charCodeAt() - 96;
    }
    person[3] *= person[2];
  });
  result = result.sort((a, b) =>
    a[3] > b[3] ? -1 : a[3] < b[3] ? 1 : a[0].localeCompare(b[0])
  );
  return result[n - 1][0];
}

console.log(
  rank(
    "Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin",
    [4, 2, 1, 4, 3, 1, 2],
    4
  ),
  "Benjamin"
);
console.log(rank("Lagon,Lily", [1, 5], 2), "Lagon");
console.log(
  rank(
    "Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin",
    [4, 2, 1, 4, 3, 1, 2],
    8
  ),
  "Not enough participants"
);
console.log(rank("", [4, 2, 1, 4, 3, 1, 2], 6), "No participants");
