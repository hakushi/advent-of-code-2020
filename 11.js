const testData = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`

data = require('./11-data.js')
const rows = data.split('\n');
const apply = (grid, occupiedCount) => {
    const newGrid = [...grid];
    for(let i = 0; i<newGrid.length; i++) {
        for(j = 0; j<newGrid[i].length; j++) {
            let count = 0;

                // top
                if(i > 0 && grid[i-1][j] === '#') {
                    count++;
                }
                // bottom
                if(i < grid.length-1 && grid[i+1][j] === '#') {
                    count++;
                }
                // left
                if(j > 0 && grid[i][j-1] === '#') {
                    count++;
                }
                // right
                if(j < grid[i].length-1 && grid[i][j+1] === '#') {
                    count++;
                }
                // top-left
                if(i > 0 && j > 0 && grid[i-1][j-1] === '#') {
                    count++;
                }
                // top-right
                if(i > 0 && j < grid[i].length-1 && grid[i-1][j+1] === '#') {
                    count++;
                }
                // bottom-left
                if(i<grid.length-1 && j > 0 && grid[i+1][j-1] === '#') {
                    count++
                }
                // bottom-right
                if(i<grid.length-1 && j < grid[i].length-1 && grid[i+1][j+1] === '#') {
                    count++
                }


                if(grid[i][j] === 'L' && count === 0) {
                    const newRow = newGrid[i].split('');
                    newRow[j] = '#';
                    newGrid[i] = newRow.join('');
                    occupiedCount++;
                } else if(grid[i][j] === '#' && count > 3) 
                {
                    const newRow = newGrid[i].split('');
                    newRow[j] = 'L';
                    newGrid[i] =newRow.join('');
                    occupiedCount--;
                }
    
        }
    }
    
    return {grid: newGrid, count: occupiedCount};
}

const compare = (count, grid) => {
    const data = apply(grid, count);
    console.log(data)
    if(count === data.count) {
        console.log('answer?: ', count);
        const chars = data.grid.join().split('');
        let realCount = 0;
        chars.forEach((char) => {
            if(char === '#') {
                realCount++;
            }
        })
        console.log('answer: ', realCount);

        return;
    }
    compare(data.count, data.grid)
}

compare(0, rows);