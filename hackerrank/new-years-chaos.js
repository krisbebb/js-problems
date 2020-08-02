function minimumBribes(q) {
    let swaps = 0;
    let min = q.length;
    console.log(min)
    console.log(q)
    console.log([0, 1, 2, 3, 4])
    for (var i = q.length - 1; i >= 0; i--){
        console.log('qi', q[i], 'i', i)
        
        if (q[i] - i > 3){
            return console.log(`Too chaotic`);
        }
        if (q[i] > i+1){ // current person has moved up at least 1 spot
            swaps += (q[i]-(i+1)); // increment swaps 1 or 2 depending
            console.log(swaps)
            console.log(q[i])
        } else { // person hasnt moved up
            if (min > q[i]){ // min starts at 5, check if greater than current person
                console.log(min)
                min = q[i];  // min becomes current person
                console.log(q[i])
            } else if (q[i] != min){ // if current person is not min (must be less than), increment swap
                console.log(q[i])
                swaps++;
            }
        }
    }
    console.log(swaps)
}

console.log(minimumBribes([2, 1, 5, 3, 4]), 3)
console.log(minimumBribes([2, 5, 1, 3, 4]), 3)
