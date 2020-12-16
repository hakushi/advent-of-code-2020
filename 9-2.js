const data = require('./9-data');
const {alphabeticSort} = require('./utils');
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
                isValid = true;
            }
        });
    });

    return {isValid, current}
}

const findWeakness = (data, value) => {
    let matchFound = false;
        data.forEach((_, index) => {
            if(matchFound) {
                return
            }
            const termArray = [];
            for(let i = 0; i<data.length; i++) {
                if(data[i+index] === value) {
                    return
                }

                termArray.push(parseInt(data[i+index], 10))
                const currentSum = termArray.reduce((a, b) => parseInt(a, 10) + parseInt(b,10), 0)
                
                if(currentSum === value) {
                    const sortedArray = termArray.sort(alphabeticSort);
                    console.log('MATCH')
                    console.log(sortedArray);
                    console.log('ANSWER: ', sortedArray[0] + sortedArray[sortedArray.length-1]);
                    console.log(currentSum, value);
                    matchFound = true;
                    
                    return;
                }

                if(currentSum>value) {
                    return;
                }

            }
        });

}

const sampleData = data;

let invalidEntry = null;

for(let i = 0;i+PREAMBLE_SIZE<sampleData.length;i++) {
    const preamble = sampleData.slice(position.start+i, position.stop+i);
    const current = parseInt(sampleData[position.stop+i], 10);
    const currentEntry = validate(preamble, current)
    if(!currentEntry.isValid) {
        invalidEntry = currentEntry.current;
    }
    
}
console.log('Invalid entry: ', invalidEntry)

findWeakness(sampleData, invalidEntry)



