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

const validate = (first, second, character, password) => {
    const firstTrue = password[first-1] === character;
    const secondTrue = password[second-1] === character;
    if(firstTrue && secondTrue) {
        return false
    }
    if(firstTrue || secondTrue) {
        return true
    }
    return false
}

let validationCounter = 0;
data.forEach(password => {
    const isValid = validate(password.min, password.max, password.character, password.password) 
    if(isValid) {
        validationCounter++;
    }
});

console.log('Valid passwords: ', validationCounter)