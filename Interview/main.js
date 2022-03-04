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
    }

}
let obj = Bubbleshorts
const myArr = [34, 23, 56, 12, 67]
console.log(obj.bubblesort(myArr))
console.log(obj.bubbleRsort(myArr))
let amArr = [2, 1, 5, 1, 0]
console.log(obj.luckySeven(amArr))
