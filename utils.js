exports.alphabeticSort = (a,b) => {
    if(a < b) {
        return -1
    }

    if(a > b) {
        return 1
    }
    
    return 0
}

exports.numericSort = (a,b) => {
    if(parseInt(a, 10) < parseInt(b, 10)) {
        return -1
    }

    if(parseInt(a, 10) > parseInt(b, 10)) {
        return 1
    }
    
    return 0
}

exports.stringArrayToInt = arr => (arr.map(string => parseInt(string, 10)))