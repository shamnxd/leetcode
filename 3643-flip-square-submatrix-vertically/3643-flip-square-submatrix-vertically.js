/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
var reverseSubmatrix = function(grid, x, y, k) {
    for (let i = 0; i < Math.floor(k / 2); i++) {
        let topRow = x + i;
        let bottomRow = x + k - 1 - i;

        for (let j = 0; j < k; j++) {
            let currentCol = y + j;
            
            let temp = grid[topRow][currentCol];
            grid[topRow][currentCol] = grid[bottomRow][currentCol];
            grid[bottomRow][currentCol] = temp;
        }
    }
    
    return grid;
};