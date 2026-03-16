/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {

    let rMap = {};
    let mMap = {};

    for (let ch of ransomNote) {
        rMap[ch] = (rMap[ch] || 0) + 1;
    }

    for (let ch of magazine) {
        mMap[ch] = (mMap[ch] || 0) + 1;
    }

    for (let key in rMap) {
        if (!mMap[key] || mMap[key] < rMap[key]) {
            return false;
        }
    }

    return true;
};