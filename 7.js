const data = require('./7-data')
const {alphabeticSort} = require('./utils');
const bagArray = []
const uniqueArray = [];
let arrayLength = null

data.forEach(bag => {
    let contansShinyGoldBag = false
    bag.contents.forEach(containedBag => {
        if(containedBag.mainColor === 'gold' && containedBag.colorType === 'shiny') {
            contansShinyGoldBag = true;
        }
      }
    );
    if(contansShinyGoldBag) {
        bagArray.push(`${bag.colorType} ${bag.mainColor}`)
    }
})
while(arrayLength !== uniqueArray.length) {
    console.log(arrayLength);
    arrayLength = uniqueArray.length;
    data.forEach(bag => {
        bag.contents.forEach(containedBag => {
            if(bagArray.includes(`${containedBag.colorType} ${containedBag.mainColor}`)) {
                bagArray.push(`${bag.colorType} ${bag.mainColor}`)
            }
        }
        );
    })
    bagArray.forEach(bag => {
        if(!uniqueArray.includes(bag)) {
            uniqueArray.push(bag)
        }
    })
}
    


uniqueArray.sort(alphabeticSort);

console.log(uniqueArray)

console.log('Bag count: ', uniqueArray.length);
