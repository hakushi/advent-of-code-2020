const data = require('./6-data');

const getYesCountFromGroup = group => {
    const arr = [];
    group.forEach(answer => {
        answer.split('').forEach(letter => {
            if(!arr.includes(letter)) {
                arr.push(letter)
            }
        } )
        
    });
    return arr.length
}
let count = 0;
data.forEach(group => {
    count += getYesCountFromGroup(group);
});

console.log('Count: ', count);

