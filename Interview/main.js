const Bubbleshorts = {
    //Normal
    bubblesort(arr) {
        let swaps
        do {
            swaps = false
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    let temp = arr[i + 1]
                    arr[i + 1] = arr[i]
                    arr[i] = temp
                    swaps = true
                }
            }
        }
        while (swaps)
        // return arr
        console.log(arr)
    },
    //recursively
    bubbleRsort(arr, pointer = arr.length - 1) {
        if (pointer === 0) return arr
        for (let i = 0; i < pointer; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i + 1]
                arr[i + 1] = arr[i]
                arr[i] = temp
            }
        }
        // Recursive call on smaller portion of the array
        //return bubbleRsort(arr, pointer - 1)
        console.log(this.bubbleRsort(arr, pointer - 1))
    },
    luckySeven(arr) {
        if (arr.length < 3) return "Not Possible"
        for (let i = 2; i < arr.length; i++) {
            if (arr[i] + arr[i - 1] + arr[i - 2] === 7) return true
        }
        return false
    },
    //multiple array
    /* sumOfArray(arr) {
         let sum = 0
         for (let i = 0; i < arr.length; i++) {
             let marr = arr[i].length
             for (let j =0; j < marr; i++) {
                 sum += arr[i][j]
             }
         }
         return sum
     },*/
    sumArrayReduce(arr) {
        return arr.reduce((t, e) => t.concat(e)).reduce((t, e) => t + e)
    }

}
let obj = Bubbleshorts
const myArr = [34, 23, 56, 12, 67]
console.log(obj.bubblesort(myArr))
console.log(obj.bubbleRsort(myArr))
let amArr = [2, 1, 5, 1, 0]
let marr = [[1, 2], [1, 5], [4, 6], [6, 8]]
console.log(obj.luckySeven(amArr))
//console.log(obj.sumOfArray(marr))
console.log(obj.sumArrayReduce(marr))

//simple callback
function testCallback(arr, callback) {
    console.log(arr);
    callback(arr);
}

testCallback(marr, function (arr) {
    console.log("Callback is call")
    console.log(typeof(arr))
})

