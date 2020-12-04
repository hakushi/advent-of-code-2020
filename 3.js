let { map } = require('./3-data');

const countCrashes = (currentMap, rightStep, downStep, print=false) => {
    
    let xPosition = 0;
    let treeCounter = 0;
    print && console.log(currentMap[0])
    
    currentMap.forEach((row, index) => {
        const step3 = xPosition + rightStep >= row.length ?
            (xPosition + rightStep)-row.length : xPosition + rightStep;
        
        let marker = '0';

        if(index >= currentMap.length-downStep) {
            return;
        }
        if(index%downStep !== 0) {
            print && console.log(currentMap[index], treeCounter);
            return;
        }
        if(currentMap[index+downStep][step3] === '#') {
            marker = 'X';
            treeCounter++;
        }
        if(
            index <= currentMap.length-1
        ) {
            const stringArray = currentMap[index+downStep].split('');
            stringArray[step3] = marker;
            currentMap[index+downStep] = stringArray.join('');
            const newPosition = xPosition + rightStep;
            xPosition = newPosition >= row.length ? newPosition-row.length : newPosition;
        }
        print && console.log(currentMap[index+downStep], treeCounter);
        
    })
    
    return treeCounter
}

const ROUTES = [
    {right: 1, down: 1},
    {right: 3, down: 1},
    {right: 5, down: 1},
    {right: 7, down: 1},
    {right: 1, down: 2},
];
let product = 1;
ROUTES.forEach(route => product *= countCrashes([...map], route.right, route.down))
countCrashes(map, 1, 2, true)
console.log('Product: ', product)