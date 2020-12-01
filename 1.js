const { list } = require('./1-data.js');

const expectedSum = 2020;
const correctItems = (a, b) => {
    return (parseInt(a, 10) + parseInt(b, 10)) === expectedSum
};
let hasMatch = false;
list.forEach((itemA, indexA) => {
    if(hasMatch) {
        return
    }
    list.forEach((itemB, indexB) => {
        if(hasMatch) {
            return
        }
        if (indexA !== indexB) {
            hasMatch = correctItems(itemA, itemB)
            if(hasMatch) {
                console.log(itemA * itemB);
            }
        }
    })
})