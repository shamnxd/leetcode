/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let str1 = ""
    let str2 = ""
    for (let i = 0; i < word1.length; i++) {
        str1 += word1[i]
    }
    for (let i = 0; i < word2.length; i++) {
        str2 += word2[i]
    }

    if (str1 == str2) {
        return true
    }
    return false
};