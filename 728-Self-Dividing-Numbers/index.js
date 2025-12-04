// Example 1:

// Input: left = 1, right = 22
// Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
// Example 2:

// Input: left = 47, right = 85
// Output: [48,55,66,77]
 

var selfDividingNumbers = function (left, right) {
    let output = [];

    main:
    for (let i = left; i <= right; i++) {
        let n = String(i)
        for (let j = 0; j < n.length; j++) {
            if (i % Number(n[j]) !== 0) {
                continue main;
            }
        }
        output.push(i);
    }

    return output;
};