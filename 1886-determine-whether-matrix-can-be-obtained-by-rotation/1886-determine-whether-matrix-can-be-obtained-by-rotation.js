/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    for (let i = 0; i < 4; i++) {
        if (isEqual(mat, target)) return true;
        rotate90(mat);
    }
    return false;
};

function isEqual(mat1, mat2) {
    for (let r = 0; r < mat1.length; r++) {
        for (let c = 0; c < mat1[0].length; c++) {
            if (mat1[r][c] !== mat2[r][c]) return false;
        }
    }
    return true;
}

function rotate90(matrix) {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}