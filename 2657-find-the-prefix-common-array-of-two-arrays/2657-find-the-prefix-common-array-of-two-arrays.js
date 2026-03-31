/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    const n = A.length;
    const count = new Array(n + 1).fill(0);
    const result = [];

    let common = 0;

    for (let i = 0; i < n; i++) {
        count[A[i]]++;
        if (count[A[i]] === 2) common++;

        count[B[i]]++;
        if (count[B[i]] === 2) common++;

        result.push(common);
    }

    return result;
};