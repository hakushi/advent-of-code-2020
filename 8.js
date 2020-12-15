const data = require('./8-data');

let acc = 0;
let position = 0;
const posArray = [];

const ACC = 'acc';
const JMP = 'jmp';
const NOP = 'nop';

const cleanData = data.split('\n').map(row => ({op: row.split(' ')[0], arg: row.split(' ')[1]}));

const step = instruction => {
    console.log(instruction);
    if(posArray.includes(position)) {
        console.log('loop detected at position ', position);
        console.log('accumulator value: ', acc)
        return;
    }
    posArray.push(position);
    const operand = instruction && instruction.arg && instruction.arg.slice(0, 1);
    const value = instruction && instruction.arg && instruction.arg.slice(1);
    switch(instruction && instruction.op) {
        case ACC:
            if(operand === '+') {
                acc += parseInt(value, 10);
                position++;
                break;
            }
            acc -= parseInt(value, 10);
            position++;
            break;
        case JMP:
            if(operand === '+') {
                position += parseInt(value, 10);
                break;
            }
            position -= parseInt(value, 10);
            break;
        case NOP:
            position++;
        default:
            break;
    }
    step(cleanData[position])
}

step(cleanData[position])