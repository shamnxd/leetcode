/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let totSum = n * (n+1) /2;
    let left = 1;
    let right = n;

    while(left<=right){

        let mid = Math.floor((left + right)/2);
        let leftSum = mid * (mid+1)/2;
        let rightSum = totSum - leftSum + mid;

        if(leftSum === rightSum){
            return mid;
        }else if(leftSum < rightSum){
            left = mid+1;
        }else if(leftSum > rightSum){
            right = mid-1; 
        }
    }

    return -1
};