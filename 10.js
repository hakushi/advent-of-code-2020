const importedData = require('./10-data');
const testData = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`.split('\n');

const testData2 = `16
10
15
5
1
11
7
19
6
12
4`.split('\n');

const { numericSort, stringArrayToInt } = require('./utils')

const DATA = stringArrayToInt(importedData).sort(numericSort);

let oneCount = 0;
let twoCount = 0;
let threeCount = 0;

const outletDiff = DATA[0];

if(outletDiff === 1) {
    oneCount++;
}

if(outletDiff === 2) {
    twoCount++;
}

if(outletDiff === 3) {
    threeCount++;
}

for(let i = 0; i < DATA.length; i++) {
    if(i+1 !== DATA.length) {
        const diff = DATA[i+1] - DATA[i]
        if(diff === 1) {
            oneCount++;
        }
        if(diff === 2) {
            oneCount++;
        }
        if(diff === 3) {
            threeCount++;
        }
    }
}

threeCount++

console.log(oneCount, twoCount, threeCount)
console.log('Jolt count: ', oneCount*threeCount )
