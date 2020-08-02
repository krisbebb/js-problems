function timeConversion(s) {
  let milTime = "";
  const length = s.length;

  let hrs = +(s[0] + s[1]);
  let ampm = s[length - 2];
  if (ampm == "A" && hrs == 12) {
    hrs = "00";
  } else if (ampm == "P" && hrs != 12) {
    hrs += 12;
  }
  

  milTime = hrs + s.slice(2, length - 2);
  return milTime.padStart(8, '0');
}

console.log(timeConversion("07:40:03AM"));
