const dec2bin = (dec) => (dec >>> 0).toString(2);

const data = require('./14-data.js');

const testData = `mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
mem[8] = 11
mem[7] = 101
mem[8] = 0
`

const lines = data.split('\n');

let currentMask = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
let currentMemory = {}

lines.forEach(line => {
    const instruction = line.split(' = ')[0];
    const data = line.split(' = ')[1]

    
    if(instruction.toLowerCase() === 'mask') {
        currentMask = data
    }

    if(instruction.match(/mem\[\d+\]/)) {
        const address = instruction.replace('mem[', '').replace(']', '')
        const maskArray = currentMask.split('');
        const binDataArray = dec2bin(data).split('');
        
        while(binDataArray.length < 36) {
            binDataArray.unshift('0')
        }
        maskArray.forEach((key, index) => {
            if(key === '1') {
                binDataArray[index] = '1'
            }

            if(key === '0') {
                binDataArray[index] = '0'
            }
        })

        currentMemory[address] = parseInt(binDataArray.join(''), 2)
    }


})


const sum = Object.values(currentMemory).reduce((curr, acc) => {
return acc+curr
}, 0)

console.log(sum)

