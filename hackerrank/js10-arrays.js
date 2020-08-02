function getSecondLargest(nums) {
//    nums.sort()
   const numObj = {}
   let newArray = []
   for (let i in nums) {
        const number = nums[i]
        numObj[number] = true
   }
   for (let val in numObj) {
       newArray.push(val)
    
   }
   console.log(newArray)
   return newArray[newArray.length - 2]
}

// function getSecondLargest(nums) {
//        nums.sort()
//        const max = nums[nums.length -1]
//        let secondMax = max
//        console.log(max)
//        for (let i = nums.length - 2; i >= 0; i --) {
//            const number = nums[i]
//            console.log(number)
//             if (number < max) {
//                 secondMax = number
//                 break
//             }
//        }
//        return secondMax
//     }
    


console.log(getSecondLargest([]));
