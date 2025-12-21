/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    const freq = new Array(26).fill(0);
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    for (let ch of s) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    let maxVowel = 0;
    let maxConsonant = 0;

    for (let i = 0; i < 26; i++) {
        const ch = String.fromCharCode(i + 97);
        if (vowels.has(ch)) {
            maxVowel = Math.max(maxVowel, freq[i]);
        } else {
            maxConsonant = Math.max(maxConsonant, freq[i]);
        }
    }

    return maxVowel + maxConsonant;
};