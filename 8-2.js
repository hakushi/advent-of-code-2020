const data = require('./8-data');

const ACC = 'acc';
const JMP = 'jmp';
const NOP = 'nop';

const cleanData = data.split('\n').map(row => ({op: row.split(' ')[0], arg: row.split(' ')[1]}));

const step = (inputData, acc = 0, cursor = 0, posArray = []) => {
    const instruction = inputData[cursor];
    let newAcc = acc;
    let newCursor = cursor;

    const operand = instruction.arg.slice(0, 1);
    const value = instruction.arg.slice(1);
    switch(instruction.op) {
        case ACC:
            if(operand === '+') {
                newAcc += parseInt(value, 10);
                newCursor++;
                break;
            }
            newAcc -= parseInt(value, 10);
            newCursor++;
            break;
        case JMP:
            if(operand === '+') {
                newCursor += parseInt(value, 10);
                break;
            }
            newCursor -= parseInt(value, 10);
            break;
        case NOP:
            newCursor++;
        default:
            break;
    }

    if(posArray.includes(newCursor)) {
        return false;
    }
    
    if(newCursor === inputData.length) {    
        console.log('Program terminated succefully! Accumulator value: ', acc)
        
        return true;
    } else {

        posArray.push(newCursor);
        return step(inputData, newAcc, newCursor, posArray)
    }
    
}

let success = false;
const jmpArr = [];
const nopArr = [];

cleanData.forEach((inst, index) => inst.op === JMP && jmpArr.push(index));
cleanData.forEach((inst, index) => inst.op === NOP && nopArr.push(index));

const tempData = [...cleanData]

jmpArr.forEach(index => {
    tempData[index].op=NOP;
    success = step(tempData)
    tempData[index].op=JMP;

    if(success) {
        return;
    }
})
console.log(success ? 'Program terminated successfully' : 'Program aborted')