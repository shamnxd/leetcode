/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function (n) {
    const result = [];

    function backtrack(current) {
        if (current.length === n) {
            result.push(current);
            return;
        }

        backtrack(current + '1');

        if (current.length === 0 || current[current.length - 1] !== '0') {
            backtrack(current + '0');
        }
    }

    backtrack("");
    return result;
};