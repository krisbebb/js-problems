// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let date = new Date(dateString)
    return (new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(date));
}

console.log(getDayName('10/11/2009'), 'Sunday')
console.log(getDayName('11/10/2010'), 'Wednesday')