var str = 'aadDDbc12255换行快dkDD'
function transfer(str) {
    var arr = []
    var result = str.split('').forEach(function (item) {
        if (isUpper(item)) {
            arr.push(item.toLowerCase())
        } else {
            arr.push(item.toUpperCase())
        }
    })
    return arr.join('')
}

console.log(transfer(str))

function isUpper(a) {
    var c = a.toUpperCase()
    return a === c
}