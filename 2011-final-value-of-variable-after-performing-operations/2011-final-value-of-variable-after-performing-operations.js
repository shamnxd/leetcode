/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;

    for (let op of operations) {
        if (op.includes("++")) {
            x++;
        } else {
            x--;
        }
    }

    return x;
};