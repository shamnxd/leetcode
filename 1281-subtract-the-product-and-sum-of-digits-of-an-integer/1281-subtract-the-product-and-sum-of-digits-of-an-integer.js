/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let arr = n.toString().split('');
    let product = 1;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
        product *= Number(arr[i]);
    }

    return product - sum;
};