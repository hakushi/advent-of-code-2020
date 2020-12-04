const data = require('./4-data');
const REQUIRED_KEYS = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

const validate = (keys) => {
    let isValid = true;
    REQUIRED_KEYS.forEach(key => {
        if(!keys.includes(key)) {
            isValid = false;
            console.log('missing key ', key)
        }
    })
    return isValid;
}

let validCounter = 0;

data.forEach(passport => {
    if(validate(Object.keys(passport))) {
        validCounter++;
    }
})

console.log('Valid passports: ', validCounter)