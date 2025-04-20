// var reverseString = function(str) {
//     if (str.length === 0) return "";
//     return str[str.length - 1] + reverseString(str.slice(0, -1));
// };

// console.log(reverseString("hello"));  // Output: "olleh"

// function removeCharactor(str, target) {
//     let result = '';
//     for(let i in str) {
//         if(str[i] !== target) {
//             result += str[i];
//         }
//     }
//     return result
// }

// console.log(removeCharactor("Hello World", "H"))

// function removeCharactor(str, target, result = '', index = 0) {
//     if(index > str.length-1) return result;
//     if(str[index] !== target) {
//         result += str[index];
//     }
//     return removeCharactor(str, target, result, index + 1)
// }

// console.log(removeCharactor("Hello World", "H"))

// function hideChar(str, charToRemove) {
//     if(str.length === 0) return "";

//     let firstChar = str[0] === charToRemove ? "" : str[0];
//     return firstChar + hideChar(str.slice(1), charToRemove);
// }

// console.log(hideChar("Hello", "l"))

// function findMinimum(arr) {
//     let low = 0;
//     let high = arr.length-1;
    
//     while(low < high) {
//         let mid = Math.floor((low+high)/2);
//         if(arr[mid] > arr[high] ) {
//             low = mid+1
//         } else {
//             high = mid;
//         }
//     }

//     return arr[low]
// }

// console.log(findMinimum([6,5,4,0,1,2,3]))


// function removeOccurance(str, specChar) {
//     return str.split(specChar).join('');
// }

// console.log(removeOccurance("He#ll#o World#", "#"))

// function removeDuplicates(arr) {
//     let nArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(!nArr.includes(arr[i])) {
//             nArr.push(arr[i]);
//         }
//     }
//     return nArr
// }

// console.log(removeDuplicates([1,2,3,4,1,1,3]))

// function removeDuplicates(arr) {
//     arr.sort((a,b) => a - b);
//     let index = 1

//     for(let i = 1; i < arr.length; i++) {
//         if(arr[i] !== arr[i - 1]) {
//             arr[index] = arr[i];
//             index++;
//         }
//     }
    
//     arr.length = index;
//     return arr
// }

// console.log(removeDuplicates([1,0,0,0,2,3,4,1,1,3]))

// function checkPalindrom(str, index = 0) {
    
//     if(index >= str.length){
//         console.log("its a palindrom");
//         return 
//     } 

//     if(str[index] !== str[str.length - 1 - index]) {
//         console.log("Not a palindrom.");
//         return
//     }
//     return checkPalindrom(str, index + 1)
// }

// checkPalindrom("elle")

// let vouwels = "aeiouAEIOU";

// let word = "Hello";
// if([...word].some((char) => vouwels.includes(char))) {
//     console.log("ys")
// } else {
//     console.log("No")
// }
