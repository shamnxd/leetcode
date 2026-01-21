/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const map = {};
    let charCode = 'a'.charCodeAt(0);

    for (let ch of key) {
        if (ch !== ' ' && map[ch] === undefined) {
            map[ch] = String.fromCharCode(charCode);
            charCode++;
        }
    }

    let result = '';
    for (let ch of message) {
        result += ch === ' ' ? ' ' : map[ch];
    }

    return result;
};