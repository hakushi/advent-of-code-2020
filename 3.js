let { map } = require('./3-data');
let xPosition = 0;
let treeCounter = 0;

console.log(map[0])

map.forEach((row, index) => {
    const step3 = xPosition + 3 >= row.length ? (xPosition + 3)-row.length : xPosition + 3;
    let marker = '0';

    if(index >= map.length-1) {
        return;
    }

    if(map[index+1][step3] === '#') {
        marker = 'X';
        treeCounter++;
    }
    if(
        index <= map.length-1
    ) {
        const stringArray = map[index+1].split('');
        stringArray[step3] = marker;
        map[index+1] = stringArray.join('');
        const newPosition = xPosition + 3;
        xPosition = newPosition >= row.length ? newPosition-row.length : newPosition;
    }
    console.log(map[index+1], treeCounter);
})

console.log('Crashed trees: ', treeCounter)