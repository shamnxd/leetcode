/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
    for (let i = 0; i < word.length; i++) {
        let temp = word.substring(0, i) + word.substring(i + 1);

        let count = {};
        for (let ch of temp) {
            count[ch] = (count[ch] || 0) + 1;
        }

        let arr = Object.values(count);
        let same = true;

        for (let j = 1; j < arr.length; j++) {
            if (arr[j] !== arr[0]) {
                same = false;
                break;
            }
        }

        if (same) return true;
    }

    return false;
};