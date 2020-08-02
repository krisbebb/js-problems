function mostFrequentDays(year) {
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  const dayLong = (date) =>
    new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);

  const startDate = new Date("1Jan" + year);
  const leapYear = year % 4 === 0;
  const firstDay = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    startDate
  );

  if (leapYear) {
    if (firstDay == "Sunday") {
      return ["Monday", "Sunday"];
    } else return [firstDay, dayLong(startDate.addDays(1))];
  }
  return [firstDay];
}
// console.log(mostFrequentDays(1770), ["Monday"], "Should be: ['Monday']");
// console.log(mostFrequentDays(1785), ["Saturday"], "Should be: ['Saturday']");
// console.log(mostFrequentDays(1794), ["Wednesday"], "Should be: ['Wednesday']");
// console.log(mostFrequentDays(1901), ["Tuesday"], "Should be: ['Tuesday']");
// console.log(mostFrequentDays(1910), ["Saturday"], "Should be: ['Saturday']");
console.log(
  mostFrequentDays(1968),
  ["Monday", "Tuesday"],
  "Should be: ['Monday', 'Tuesday']"
);
console.log(
  mostFrequentDays(1984),
  ["Monday", "Sunday"],
  "Should be: ['Monday', 'Sunday']"
);
// console.log(mostFrequentDays(1986), ["Wednesday"], "Should be: ['Wednesday']");
// console.log(mostFrequentDays(2001), ["Monday"], "Should be: ['Monday']");
console.log(
  mostFrequentDays(2016),
  ["Friday", "Saturday"],
  "Should be: ['Friday', 'Saturday']"
);
// console.log(mostFrequentDays(2135), ["Saturday"], "Should be: ['Saturday']");
// console.log(mostFrequentDays(3043), ["Sunday"], "Should be: ['Sunday']");
// console.log(mostFrequentDays(3150), ["Sunday"], "Should be: ['Sunday']");
// console.log(mostFrequentDays(3230), ["Tuesday"], "Should be: ['Tuesday']");
// console.log(mostFrequentDays(3361), ["Thursday"], "Should be: ['Thursday']");
console.log(
  mostFrequentDays(2000),
  ["Saturday", "Sunday"],
  "Should be: ['Saturday', 'Sunday']"
);
console.log(
  mostFrequentDays(1984),
  ["Monday", "Sunday"],
  "Should be: ['Monday', 'Sunday']"
);

