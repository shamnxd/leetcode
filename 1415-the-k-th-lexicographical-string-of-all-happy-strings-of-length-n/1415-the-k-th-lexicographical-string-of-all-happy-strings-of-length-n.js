/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
    let result = "";
    let count = 0;

    function backtrack(path) {
        if (count >= k) return;

        if (path.length === n) {
            count++;
            if (count === k) {
                result = path;
            }
            return;
        }

        for (let ch of ['a', 'b', 'c']) {
            if (path.length > 0 && path[path.length - 1] === ch) continue;

            backtrack(path + ch);
        }
    }

    backtrack("");
    return result;
};