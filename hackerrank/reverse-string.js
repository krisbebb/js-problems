function reverseString(s) {
    
    try {
        s = s.split('').reverse().join('')
        console.log(s)
    } catch (e) {
        console.log(e.message)
        console.log(s)
    }
}

reverseString('1234')

reverseString(Number('1234'))