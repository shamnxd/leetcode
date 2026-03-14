/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {

    let TrackPattern = new Map();
    let TrackS = new Map();
    let sArray = s.split(' ');

    if (pattern.length !== sArray.length) return false;

    for (let i = 0; i < sArray.length; i++) {

        const p = pattern[i];
        const w = sArray[i];

        if (!TrackPattern.has(p) && !TrackS.has(w)) {
            TrackPattern.set(p, w);
            TrackS.set(w, p);
        }
        else {
            if (TrackPattern.get(p) !== w ||
                TrackS.get(w) !== p) {
                return false;
            }
        }
    }

    return true;
};