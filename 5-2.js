const data = require('./5-data');

const getRow = string => {
    const arr = string.split('');
    const base = 127;
    let row = [0, base];
    
    for(i = 0; i<arr.length; i++) {
        row = arr[i] === 'B' ?
            [Math.ceil(row[0] + (row[1]-row[0])/2), row[1]] :
            [row[0], Math.floor(row[1]-(row[1]-row[0])/2)];
        // console.log(i, row);
    }

    if(row[0] !== row[1]) {
        console.log('errror');
    }

    return row[0]
}
const getColumn = string => {
    const arr = string.split('');
    const base = 7;
    let col = [0, base];
    
    for(i = 0; i<arr.length; i++) {
        col = arr[i] === 'R' ?
            [Math.ceil(col[0] + (col[1]-col[0])/2), col[1]] :
            [col[0], Math.floor(col[1]-(col[1]-col[0])/2)];
        // console.log(i, col);
    }

    if(col[0] !== col[1]) {
        console.log('errror');
    }

    return col[0]
}

const getBoardingPass = (string) => {
    const rowString =  string.split('').slice(0, 7).join('');
    const colString = string.split('').slice(7, 10).join('');
    const row = getRow(rowString);
    const column = getColumn(colString)
    return {row, column, id: row*8+column}
}

const passes = data.map(pass => getBoardingPass(pass))

const sortFunc = (a,b) => {
    if(a.id < b.id) {
        return 1
    }
    if(a.id > b.id) {
        return -1
    }
    return 0
}

const grouped = {}
passes.forEach(pass => {
    grouped.hasOwnProperty(pass.row) ?
        grouped[pass.row].push({col: pass.column, id: pass.id })
            :
        grouped[pass.row] = [{col: pass.column, id: pass.id}]
})

Object.keys(grouped).forEach(key => {
    if(grouped[key].length !== 8) {
        console.log(grouped[key].length, grouped[key])
    }
})