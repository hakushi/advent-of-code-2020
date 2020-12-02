const { data } = require('./2-data.js');

const getOccurances = (letter, password) => {
    let counter = 0;
    for(i=0;i<password.length;i++) {
        if(password[i] === letter) {
            counter++
        }
    }
    return counter
}

const validate = (min, max, character, password) => {
    occurances = getOccurances(character, password)
    return occurances >= min && occurances <= max
}

let validationCounter = 0;
console.log(data)
data.forEach(password => {
    const isValid = validate(password.min, password.max, password.character, password.password) 
    if(isValid) {
        validationCounter++;
    }
});

console.log('Valid passwords: ', validationCounter)