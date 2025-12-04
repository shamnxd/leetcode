// function Fibonacci(n) {

//     if(n < 2) {
//         return n;
//     }

//     return Fibonacci(n-1) + Fibonacci(n -2);
// }

// console.log(Fibonacci(8))

// function Fibonacci(n) {
//     let a = 0; b = 1;

//     for(let i = 2; i <= n; i++) {
//         let temp = a+b;
//         a = b;
//         b = temp;
//     }

//     return n === 0 ? a : b;
// }

// console.log(Fibonacci(8))

// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length -1;
    
 
    
//     while(left <= right) {
//         let mid = Math.floor((left+right)/2);
//         if(arr[mid] === target) {
//             return mid;
//         }
//         if(target < arr[mid]) {
//             right = mid+1
//         } else {
//             left = mid-1;
//         }
//     }
    
//     return -1
// }

// console.log(binarySearch([1,2,3,4,5,6], 2))

// function binarySearch(arr, target, left = 0, right = arr.length-1 ) {

//     let mid = Math.floor((left+right) /2)

//     if(arr[mid] === target) {
//         return mid;
//     }

//     if(left <= right) {
//         if(target > arr[mid]) {
//             return binarySearch(arr, target, mid + 1, right);
//         } else  {
//             return binarySearch(arr, target, left, mid-1);       
//         } 
//     } else  {
//         return -1;
//     }

// }

// console.log(binarySearch([1,2,3,4,5,6], 6))


// function fib(n) {
//     if(n < 2) {
//         return n;
//     } 
//     return fib(n-1) + fib(n-2)
// }

// console.log(fib(10))