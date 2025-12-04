// class MinHeap {
//     constructor() {
//         this.heap = [];
//     }

//     getParentIndex(index) {
//         return Math.floor((index -1)/2);
//     }

//     getLeftChildIndex(index) {
//         return 2 * index + 1;
//     }

//     getRightChildIndex(index) {
//         return 2 * index + 2;
//     }

//     swap(i, j) {
//         [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
//     }

//     insert(value) {
//         this.heap.push(value);
//         this.heapifyUp();
//     }

//     heapifyUp() {
//         let index = this.heap.length -1;

//         while(index > 0) {
//             let parentIndex = this.getParentIndex(index);
//             if(this.heap[index] < this.heap[parentIndex]) {
//                 this.swap(index, parentIndex);
//                 index = parentIndex;
//             } else {
//                 break;
//             }
//         }
//     }

//     extractMin() {
//         if(this.heap.length === 0) return null;
//         if(this.heap.length === 1) return this.heap.pop();

//         const min = this.heap[0]; // Smallest element
//         this.heap[0] = this.heap.pop(); // Last element to root
//         this.heapifyDown(0) // restore heap property

//         return min;
//     }

//     heapifyDown(index) {
//         let smallest = index;
//         let leftChildIndex = this.getLeftChildIndex(index);
//         let rightChildIndex = this.getRightChildIndex(index);

//         if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]){
//             smallest = leftChildIndex;
//         }

//         if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
//             smallest = rightChildIndex;
//         }

//         if(smallest !== index) {
//             this.swap(index, smallest);
//             this.heapifyDown(smallest);
//         }
//     }

//     displayHeap() {
//         console.log(this.heap);
//     }
// }

// const minHeap = new MinHeap();
// minHeap.insert(10);
// minHeap.insert(15);
// minHeap.insert(30);
// minHeap.insert(40);
// minHeap.insert(50);
// minHeap.insert(8);

// console.log("Min-Heap:", minHeap.heap);  
// console.log("Extracted Min:", minHeap.extractMin());  
// console.log("Heap after extracting min:", minHeap.heap);  

// class MaxHeap {
//     constructor() {
//         this.heap = [];
//     }

//     getParentIndex(index) {
//         return Math.floor((index -1)/2)
//     }

//     getLeftChildIndex(index) {
//         return 2 * index + 1;
//     }

//     getRightChildIndex(index) {
//         return 2 * index + 2;
//     }

//     insert(value) {
//         this.heap.push(value);
//         this.heapfiyUp();
//     }

//     swap(i, j) {
//         [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
//     }

//     heapfiyUp() {
//         let index = this.heap.length -1;

//         while(index > 0) {
//             let parentIndex = this.getParentIndex(index);
//             if(this.heap[index] > this.heap[parentIndex]) {
//                 this.swap(index, parentIndex);
//                 index = parentIndex;
//             } else {
//                 break;
//             }
//         }
//     }

//     extractMax() {
//         if(this.heap.length === 0) return null;
//         if(this.heap.length === 1) return this.heap.pop();

//         const max = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapfiyDown(0);

//         return max;
//     }

//     heapfiyDown(index) {
//         let largest = index;
//         let leftChildIndex = this.getLeftChildIndex(index);
//         let rightChildIndex = this.getRightChildIndex(index);

//         if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]) {
//             largest = leftChildIndex
//         }

//         if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]) {
//             largest = rightChildIndex;
//         }

//         if(largest !== index) {
//             this.swap(index, largest);
//             this.heapfiyDown(largest);
//         }
//     }

//     displayHeap() {
//         console.log(this.heap);
//     }
// }

// const maxHeap = new MaxHeap();
// maxHeap.insert(10);
// maxHeap.insert(15);
// maxHeap.insert(20);
// maxHeap.insert(17);
// maxHeap.insert(8);

// console.log("Max-Heap:", maxHeap.heap); // Output: [20, 17, 15, 10, 8]
// console.log("Extract Max:", maxHeap.extractMax()); // Output: 20
// console.log("After Extracting Max:", maxHeap.heap); 

// function heapify(arr, n, i) {
//     let largest = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;

//     if(left < n && arr[left] > arr[largest]) {
//         largest = left;        
//     }

//     if(right < n && arr[right] > arr[largest]) {
//         largest = right;        
//     }

//     if(largest !== i) {
//         [arr[i], arr[largest]] = [arr[largest], arr[i]];
//         heapify(arr, n, largest);
//     }

// }

// function heapSort(arr) {
//     let n = arr.length;
//     for(let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//         heapify(arr, n, i);
//     }

//     for(let i = n -1; i > 0; i--) {
//         [arr[0], arr[i]] = [arr[i], arr[0]];
//         heapify(arr, i, 0);
//     }
// }

// let arr = [5, 3, 8, 4, 2, 7, 1];
// heapSort(arr);
// console.log("Sorted array:", arr);