const data = require('./7-data')
const {alphabeticSort} = require('./utils');
const bagArray = []
const uniqueArray = [];
let arrayLength = null

const arr = [];
const getBagContents = (bag) => {
    bag && bag.contents && bag.contents.forEach((bag) => {
        for(let i=0; i<bag.amount; i++) {
            const {colorType, mainColor} = bag;
            arr.push({colorType, mainColor})
            getBagContents(getBag(mainColor, colorType));
        }
    });
    return arr;
}

const getBag = (mainColor, colorType) =>
    data.find(bag => bag.mainColor === mainColor && bag.colorType === colorType);

const goldBag = getBag('gold', 'shiny');
getBagContents(goldBag);

console.log('Bag count: ', arr.length)
