const data = require('./4-data');
const REQUIRED_KEYS = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
const VALID_EYE_COLORS = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']

const validate = (passport, debug=false) => {
    const { byr, iyr, eyr, hgt, hcl, ecl, pid } = passport
    let isValid = true;

    // has all keys
    REQUIRED_KEYS.forEach(key => {
        if(!Object.keys(passport).includes(key)) {
            isValid = false;
            debug && console.log('missing key ', key)
        }
    })

    // valid birth year
    if(byr && byr.length !== 4) {
        isValid = false;
        debug && console.log('BYR not 4 characters. Received: ', byr.length)
    }

    if(byr && parseInt(byr, 10) < 1920 || parseInt(byr, 10) > 2002) {
        isValid = false;
        debug && console.log('BYR not within range (1920-2002). Received: ', byr )
    }
    
    // valid issue year
    if(iyr && iyr.length !== 4) {
        isValid = false;
        debug && console.log('IYR not 4 characters. Received: ', iyr.length)
    }

    if(iyr && parseInt(iyr, 10) < 2010 || parseInt(iyr, 10) > 2020) {
        isValid = false;
        debug && console.log('IYR not within range (2010-2020). Received: ', iyr )
    }
    
    // valid expiration year
    if(eyr && eyr.length !== 4) {
        isValid = false;
        debug && console.log('EYR not 4 characters. Received: ', eyr.length)
    }

    if(eyr && parseInt(eyr, 10) < 2020 || parseInt(eyr, 10) > 2030) {
        isValid = false;
        debug && console.log('EYR not within range (2020-2030). Received: ', eyr )
    }

    // valid height
    if(hgt && (!hgt.includes('cm') && !hgt.includes('in'))) {
        isValid = false;
        debug && console.log('HGT does not contain height unit. Received: ', hgt)
    }

    if(hgt && hgt.includes('cm')) {
        const parsedHgt = parseInt(hgt.replace('cm', ''), 10);
        if (parsedHgt < 150 || parsedHgt > 193) {
            isValid = false;
            debug && console.log('HGT not within range (150cm-193cm). Received: ', hgt)
        }
    }

    if(hgt && hgt.includes('in')) {
        const parsedHgt = parseInt(hgt.replace('in', ''), 10);
        if (parsedHgt < 59 || parsedHgt > 76) {
            isValid = false;
            debug && console.log('HGT not within range (59in-76in). Received: ', hgt)
        }
    }

    // valid hair color
    if(hcl) {
        const pattern = /\#[a-f0-9]{6}/gi;

        if(!pattern.test(hcl)) {
            isValid = false;
            debug && console.log('HCL does not match correct pattern. Received: ', hcl);
        }
    }
    
    // valid eye color
    if(ecl && !VALID_EYE_COLORS.includes(ecl)) {
        isValid = false;
        debug && console.log('invalid ECL. Received: ', ecl);
    }

    // valid passport id
    if(pid) {
        const pattern = /^[0-9]{9}$/gi;

        if(!pattern.test(`${pid}`)) {
            isValid = false;
            debug && console.log('PID does not match correct pattern. Received: ', pid);
        }
    }

    return isValid;
}

let validCounter = 0;

data.forEach(passport => {
    if(validate(passport)) {
        validCounter++;
    }
})

console.log('Valid passports: ', validCounter)