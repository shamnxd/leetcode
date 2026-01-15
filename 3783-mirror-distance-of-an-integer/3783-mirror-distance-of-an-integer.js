/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    const s = n.toString()
    let rev =''
    for(let i = s.length-1 ; i>=0; i--){
        rev+=s[i]
    }
    const n2 = Number(rev);
    return Math.abs(n - n2);
};