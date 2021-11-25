const testData = `939
7,13,x,x,59,x,31,19`

const data = require('./13-data.js');

const time = data.split('\n')[0];
const lines = data.split('\n')[1].split(',');

console.log(time)
console.log(lines)

const closestArr = [];
lines.forEach(line => {
    if(line === 'x') {
        return;
    }
    for(let i = 1;i++;(i-1)*line < time) {
        if((i-1)*line > time) {

            closestArr.push({line: line, time: line*(i-1)-time, answer: (line*(i-1)-time)*line});
            return;
        }
    }
})

const sortFunc = (a, b) => {
    if(a.time < b.time) {
        return -1
    }

    if (a.time > b.time) {
        return 1
    }

    return 0
}

console.log(closestArr.sort(sortFunc))