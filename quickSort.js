function quickSort(arr) {
    if(arr.length <= 1) {
        return arr
    }

    var midIndex = Math.floor(arr.length/2)
    var valArr = arr.splice(midIndex,1)
    var midIndexVal = valArr[0]
    var left = [],right = []

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < midIndexVal){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return quickSort(left).concat(midIndexVal,quickSort(right))
}