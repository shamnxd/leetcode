/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let sortarr = nums.sort((a,b)=>b-a)
    let res = (nums[0]-1)*(nums[1]-1)
    return res  
};