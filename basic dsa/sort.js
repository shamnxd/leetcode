// function bubbleSort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length - i - 1; j++) {
//             if(arr[j] > arr[j + 1]) {
//                 [[arr[j] , arr[j + 1]] = [arr[j + 1], arr[j]]]
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort([10,2,30,5,5]))


// function slectionSort(arr) {
//     let n = arr.length;
//     for(let i = 0; i < n -1; i++) {
//         let minIndex = i;
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         if(minIndex !== i) {
//             [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//         }
//     }
//     return arr;
// }

// console.log(slectionSort([10,2,30,5,5]))

// function insertionSort(arr) {
    // for(let i = 1; i < arr.length; i++) {
    //     let key = arr[i];
    //     let j = i - 1;
        
    //     while(j >= 0 &&  arr[j] > key) {
    //         arr[j + 1] = arr[j];
    //         j--;
    //     }
    //     arr[j + 1] = key; 
        
    // }
    // return arr
// }

// console.log(insertionSort([1,5,6,22,0,30]))

// function quickSort(arr) {
//     if (arr.length <= 1) return arr;
    
//     let provt = arr[0];
//     let right = [];
//     let left = [];
//     for(let i = 1; i < arr.length; i++) {
//         if(provt < arr[i]) {
//            right.push(arr[i]);
//         } else {
//            left.push(arr[i])
//         }
//     }

//     return [...quickSort(left), provt, ...quickSort(right)]
// }

// console.log(quickSort([ 9, 3, 5, 7, 8, 0, 2, 1, 4, 10]));

// function mergeSort(arr) {
//     if(arr.length <= 1) return arr;

//     let mid = Math.floor(arr.length/2);
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));

//     return merge(left, right);
// }

// function merge(left, right) {
//     let sortedArray = [];

//     while(left.length && right.length) {
//         if(left[0] < right[0]) {
//             sortedArray.push(left.shift());
//         } else{
//             sortedArray.push(right.shift());
//         }
//     }

//     return [...sortedArray, ...left, ...right];
// }

// console.log(mergeSort([10,2,1,3,5,6,11]))



// function selectionSort(arr) {
//     for(let i = 0; i < arr.length - 1; i++) {
//         let minIndex = i;
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }

//         if(minIndex !== i) {
//             [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//         }
//     }

//     return arr;
// }

// console.log(selectionSort([1,5,3,2,7,8,0]));

// function bubbleSort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length - i; j++) {
//             if(arr[j] > arr[j+1]) {
//                 [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
//             }
//         }
//     }

//     return arr;
// }

// console.log(bubbleSort([1,7,3,9,3,0,2]));

// function quickSort(arr) {
//     if (arr.length <= 1) return arr;

//
//     for(let i = 1; i < arr.length; i++) {
//         if(arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)];
// }

// console.log(quickSort([1,2,5,7,8,9,4,3,0]));

// function mergeSort(arr) {

//     if(arr.length <= 1) return arr;

//     let mid = Math.floor(arr.length/2);
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));

//     return merge(left, right);
// }

// function merge(left, right) {
//     let sortedArray = [];
//     while(left.length && right.length) {
//         if(left[0] < right[0]) {
//             sortedArray.push(left.shift());
//         } else {
//             sortedArray.push(right.shift())
//         }
//     }

//     return [...sortedArray, ...left, ...right]
// }

// console.log(mergeSort([1,2,28,7,9,0,4]))

// function insertionSort(arr) {
//     for(let i = 1; i < arr.length; i++) {
//         let key = arr[i];
//         let j = i - 1;
        
//         while(j >= 0 &&  arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j--;
//         }
//         arr[j + 1] = key; 
        
//     }
//     return arr
// }


// function insertionSort(arr) {
//     for(let i = 1; i < arr.length; i++) {
//         let key = arr[i];
//         let j = i - 1;

//         while(j >= 0 && arr[j] >  key) {
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j + 1] = key;
//     }

//     return arr;
// }
// console.log(insertionSort([1,2,7,28,9,0,4]))

// function selection(arr) {
//     for(let i = 0; i < arr.length -1; i++) {
//     let minIndex = i;
//         for(let j = i+1; j < arr.length; j++) {
//             if(arr[j] < arr[minIndex]) {
//                 minIndex = j
//             }
//         }
        
//         if(minIndex !== i) {
//             [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//         }
//     }
    
//     return arr
// }

// console.log(selection([7,5,4,3,0,8]));

function quickSort(arr) {
    if(arr.length <= 1) return arr;
    let pivot = arr[0];

    let left = [];
    let right = [];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([7,5,4,3,0,8]));