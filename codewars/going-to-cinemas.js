// The function movie has 3 parameters:
// card (price of the card),
// ticket (normal price of a ticket),
// perc (fraction of what he paid for the previous ticket) and returns the first n such that

// ceil(price of System B) < price of System A.

// System A : he buys a ticket (15 dollars) every time
// System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price,
// then for each additional ticket he pays 0.90 times the price paid for the previous ticket.

// System A : 15 * 3 = 45
// System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90
// ( = 536.5849999999999, no rounding for each ticket)

// John wants to know how many times he must go to the cinema so that the final result of System B,
// when rounded up to the next dollar, will be cheaper than System A.

function movie(card, ticket, perc) {
  let numberOfVisits = 0,
    aTotal = 0,
    bTotal = card,
    discountTicket = ticket * perc;
  while (Math.ceil(bTotal) > Math.ceil(aTotal)) {
    aTotal += ticket;
    bTotal += discountTicket;
    discountTicket *= perc;
    numberOfVisits++;
  }
  return numberOfVisits;
}

console.log(movie(500, 15, 0.9), 43);
//     (with card the total price is 634, with tickets 645)
console.log(movie(100, 10, 0.95), 24);
//     (with card the total price is 235, with tickets 240)

console.log(movie(500, 15, 0.9), 43);
console.log(movie(100, 10, 0.95), 24);
