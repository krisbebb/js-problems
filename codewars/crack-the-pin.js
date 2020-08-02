const crypto = require("crypto");

function crack(hash) {
  for (let pin = 0; pin <= 99999; pin++) {
    let pinString = pin.toString().padStart(5, "0");
    if (crypto.createHash("md5").update(pinString).digest("hex") === hash) {
      return pinString;
    }
  }
}

console.log(crack("827ccb0eea8a706c4c34a16891f84e7b"), "12345");

console.log(crack("86aa400b65433b608a9db30070ec60cd"), "00078");
