const data = require('./6-data');

const getYesCountFromGroup = group => {
    const answers = {};
    const groupSize = group.length;
    let count = 0;

    group.forEach(answer => {
        answer.split('').forEach(letter => {
            if(!answers.hasOwnProperty(letter)) {
                answers[letter] = 1;
            } else {
                answers[letter] += 1
            }
        } )
    });

    Object.keys(answers).forEach(key => {
        if(answers[key] === groupSize) {
            count++;
        }
    })

    return count
}

let count = 0;
data.forEach(group => {
    count += getYesCountFromGroup(group);
});

console.log('Count: ', count);

