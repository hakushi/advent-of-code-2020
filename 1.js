const { list } = require('./1-data.js');
// const testList = [1721,979,366,299,675,1456];
const expectedSum = 2020;
const correctItems = (a, b, c) => {
    return (parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10)) === expectedSum
};
let hasMatch = false;
list.forEach((itemA, indexA) => {
    if(hasMatch) {
        return
    }
    list.forEach((itemB, indexB) => {
        if(hasMatch || indexA === indexB) {
            return
        }
        list.forEach((itemC, indexC) => {
            if(hasMatch || indexB === indexC) {
                return
            }
                hasMatch = correctItems(itemA, itemB, itemC)
                if(hasMatch) {
                    console.log('Found match')
                    console.log(itemA * itemB * itemC);
                }
        })
    })
})