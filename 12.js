const testData = `F10
N3
F7
R90
F11`;

const data = require('./12-data.js');

const instructions = data.split('\n')

const position = {
    N:0,
    S:0,
    W:0,
    E:0,
    direction: 90
}


const getValue = (instruction) => parseInt(instruction.split(/N|S|W|E|F|R|L/)[1], 10);
const getDirection = (instruction) => instruction.slice(0,1);


const parseInstruction = (instruction) => {
    console.log(instruction)
    value = getValue(instruction);
    direction = getDirection(instruction)

    if(instruction.match(/N|S|W|E/)) {
        position[direction] = value + position[direction]
    }

    if(instruction.includes('F')) {
        switch(position.direction) {
            case 0:
                position.N +=value;
                break;
            case 90:
                position.E += value;
                break;
            case 180: 
                position.S += value;
                break;
            case 270: 
                position.W += value;
                break;
        }

    }

    if(instruction.includes('R')) {
        position.direction = (position.direction + value) % 360;
    }

    if(instruction.includes('L')) {
        position.direction = Math.abs(position.direction - value + 360) % 360;
    }

    console.log(position);
}

// parseInstruction(initialPosition, instructions[0])
instructions.forEach(instruction => parseInstruction(instruction))

console.log('answer: ', Math.abs(position.N-position.S) + Math.abs(position.E-position.W))