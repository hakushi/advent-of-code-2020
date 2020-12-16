const data = require('./9-data');
const testData = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`.split('\n');

const PREAMBLE_SIZE = 25;
const position = {start: 0, stop: PREAMBLE_SIZE};

const validate = (preamble, current) => {
    let isValid = false;
    preamble.forEach((a, indexA) => {
        preamble.forEach((b, indexB) => {
            if(indexA !== indexB && parseInt(a, 10)+parseInt(b, 10) === current) {
                // console.log(`${a} + ${b} = ${current}`);
                isValid = true;
            }
        });
    });

    if(!isValid) {
        console.log(`${current} is INVALID`);
        return isValid;
    }

    // console.log(`${current} is VALID`);
    return isValid;
}

for(let i = 0;i+PREAMBLE_SIZE<data.length;i++) {
    const preamble = data.slice(position.start+i, position.stop+i);
    const current = parseInt(data[position.stop+i], 10);
    validate(preamble, current)
    
}