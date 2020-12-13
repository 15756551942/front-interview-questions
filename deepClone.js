function checkType(target) {
    return Object.prototype.toString.call(target).slice(-8,1)
}

function deepClone(target) {
    var dataType = checkType(target),result

    if(dataType === 'Object'){
        result = {}
    }else if(dataType === 'Array'){
        result = []
    }else {
        return target
    }

    for(var i in target){
        var value = target[i]

        if(dataType === 'Object' || dataType === 'Array'){
            result[i] = deepClone(value)
        }else{
            result[i] = value
        }
    }

    return result
}