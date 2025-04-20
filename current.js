// Recursive Factorial Function 

// function rFactorial(n){
//   if(n === 0){
//     return 1;
//   }
//   return n * rFactorial(n - 1);
// }

// console.log(rFactorial(5));``
// console.log(rFactorial(0));
// console.log(rFactorial(1));



// Recursive Fibonacci Sequence 

// function rfibonacci(n) {
//   if(n < 2) {
//     return n;
//   }
//   return rfibonacci(n - 1) + rfibonacci(n -2);
// }
// console.log(rfibonacci(0));
// console.log(rfibonacci(1));
// console.log(rfibonacci(6));



// Lenear Search

// function linearSearch(arr, target) {
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(linearSearch([-5, 2, 10, 4, 6], 10))
// console.log(linearSearch([-5, 2, 10, 4, 6], 6))
// console.log(linearSearch([-5, 2, 10, 4, 6], 20))



// Binary Search

// function binarySearch(arr, target) {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;

//   while (leftIndex <= rightIndex) {
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if (target === arr[middleIndex]) {
//       return middleIndex;
//     }
//     if (target < arr[middleIndex]) {
//       rightIndex = middleIndex - 1;
//     } else {
//       leftIndex = middleIndex + 1;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch([-5, 2, 4, 6, 10], 10))
// console.log(binarySearch([-5, 2, 4, 6, 10], 6))
// console.log(binarySearch([-5, 2, 4, 6, 10], 4))
// console.log(binarySearch([-5, 2, 4, 6, 10], 22))

// Binary Search Recursive

// function binarySearchRecursive(arr, target) {
//   return search(arr, target, 0, arr.length - 1);
// }
// function search(arr, target, leftIndex, rightIndex) {
//   if(leftIndex > rightIndex) {
//     return -1;
//   }

//   let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//   if(target === arr[middleIndex]) {
//     return middleIndex;
//   }

//   if(target < arr[middleIndex]) {
//     return search(arr, target, leftIndex, middleIndex - 1);
//   } else {
//     return search(arr, target, middleIndex + 1, rightIndex);
//   }
// }

// console.log(binarySearchRecursive([-5, 2, 4, 6, 10], 10))
// console.log(binarySearchRecursive([-5, 2, 4, 6, 10], 6))
// console.log(binarySearchRecursive([-5, 2, 4, 6, 10], 4))
// console.log(binarySearchRecursive([-5, 2, 4, 6, 10], 20))

// function mergeSortedArray(arr1, arr2) {
//     let i = 0, j=0;
//     let mergedArray = [];

//     while(i < arr1.length && j < arr2.length) {
//         if(arr1[i] < arr2[j]) {
//             mergedArray.push(arr1[i]);
//             i++;
//         } else {
//             mergedArray.push(arr2[j]);
//             j++;
//         }
//     }

//     while(i < arr1.length) mergedArray.push(arr1[i++]);
//     while(j < arr2.length) mergedArray.push(arr2[j++])
//     return mergedArray;
// }

// console.log(mergeSortedArray([1, 3, 5], [2, 4, 6]))