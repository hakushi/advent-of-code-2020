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

exports.removeIndexFromArray = (array, index) => [...array.slice(0,index), ...array.slice(index+1,array.length)]