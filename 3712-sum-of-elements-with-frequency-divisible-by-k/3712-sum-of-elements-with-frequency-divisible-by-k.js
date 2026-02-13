/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function(nums, k) {
    let sum =0
    let freq = {}

    for(let num of nums ){
        freq[num] = (freq[num]||0)+1
    }
    console.log(freq)
    for(let key in freq){
        if(freq[key]%k==0){
           sum +=key*freq[key]
        }
    }
    return sum
};