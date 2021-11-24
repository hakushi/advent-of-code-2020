const { forEach } = require('./10-data');
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

const { numericSort, removeIndexFromArray, stringArrayToInt, alphabeticSort } = require('./utils')

const DATA = stringArrayToInt(testData2).sort(numericSort);

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
let totalArrayLength = 0;
const totalArray = []
totalArray.push([...DATA].join(','))

const doStuff = (input) => {
    for(let i = 0; i < input.length; i++) {
        if(i !== input.length) {
            const diff = input[i+1] - input[i]
            const diff2 = input[i+2] - input[i]
            const diff3 = input[i+3] - input[i]
            
            if(diff2 === 2 || diff2 === 3) {
                totalArray.push([...removeIndexFromArray(DATA, i+1)].join(','))
            }
            }
        }

}

doStuff(DATA);

console.log('totalArray', totalArray.sort(alphabeticSort))
console.log('count', totalArray.length)
