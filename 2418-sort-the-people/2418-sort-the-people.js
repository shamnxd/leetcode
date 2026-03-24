/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    let arr = []
    for (let i = 0; i < names.length; i++) {
        arr.push([heights[i], names[i]])
    }

    let sortarr = arr.sort((a, b) => b[0] - a[0])
    return sortarr.map((val) => val[1])
};