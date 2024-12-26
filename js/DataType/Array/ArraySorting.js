const arr = [34, 56, 87, 32, 76, 16]

function bubbleSort(el) {
    let done = false
    while (!done) {
        done = true
        for (let i = 1; i < el.length; i++) {
            if (el[i - 1] < el[i]) {
                done = false
                let temp = el[i - 1]
                el[i - 1] = el[i]
                el[i] = temp
            }
        }
    }
    return el;
}

function bubbleSortDesc(el) {
    let done = false
    while (!done) {
        done = true
        for (let i = 1; i < el.length; i++) {
            if (el[i - 1] > el[i]) {
                done = false
                let temp = el[i - 1]
                el[i - 1] = el[i]
                el[i] = temp
            }
        }
    }
    return el;
}

let sortArr = []
sortArr = bubbleSort(arr)
console.log(sortArr)
sortArr = bubbleSortDesc(arr)
console.log(sortArr)
console.log(arr.sort())

