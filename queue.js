// class Queue {
//     constructor() {
//         this.items = [];
//     }

//     enqueue(element) {
//         this.items.push(element);
//     }

//     dequeue() {
//         return this.items.shift();
//     }

//     size() {
//         return this.items.length;
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     peek() {
//         if(!this.isEmpty()) {
//             return this.items[0];
//         }
//     }

//     print() {
//         console.log(this.items.toString());
//     }
// }

// const queue = new Queue();

// console.log(queue.isEmpty());
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.print();
// queue.dequeue();
// queue.print();

// class Queue {
//     constructor() {
//         this.items = {};
//         this.rear = 0;
//         this.front = 0;
//     }

//     enqueue(element) {
//         this.items[this.rear] = element;
//         this.rear++;
//     }

//     dequeue() {
//         delete this.items[this.front];
//         this.front++;
//     }

//     isEmpty() {
//         return this.rear - this.front === 0;
//     }

//     size() {
//         return this.rear - this.front;
//     }

//     peek() {
//         if(!this.isEmpty()) {
//             return this.items[this.front];
//         } 
//         return -1
//     }

//     print() {
//         if(!this.isEmpty()) {
//             return console.log(Object.values(this.items));
//         } 
//         return console.log(-1)
//     }
// }

// const queue = new Queue();

// console.log(queue.isEmpty())
// console.log(queue.size());
// console.log(queue.peek());
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.dequeue();
// queue.print();

// class circularQueue {
//     constructor(capacity) {
//         this.items = new Array(capacity);
//         this.capacity = capacity;
//         this.currentLength = 0;
//         this.rear = -1;
//         this.front = -1;
//     }

//     isFull() {
//         return this.currentLength === this.capacity;
//     }

//     isEmpty() {
//         return this.currentLength === 0;
//     }

//     enqueue(element) {
//         if(!this.isFull()) {
//             this.rear = (this.rear +1) % this.capacity;
//             this.items[this.rear] = element;
//             this.currentLength += 1;
//             if(this.front === -1) {
//                 this.front = this.rear;
//             }
//         } else {
//             console.log("Queue is full. Cannot enqueue", element);
//         }
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             console.log("Queue is empty. Cannot dequeue.");
//             return;
//         }
//         console.log("Dequeued:", this.items[this.front]);
//         this.items[this.front] = null;
//         this.front = (this.front + 1) % this.capacity;
//         this.currentLength -=1;
//         if(this.isEmpty()) {
//             this.rear = -1;
//             this.front = -1;
//         }
//     }

//     peek() {
//         if(!this.isEmpty()) {
//             return this.items[this.front];
//         } 
//         return "Queue is empty.";
//     }

//     print() {
//         if(this.isEmpty()) {
//             return console.log("Queue is Empty..");
//         } else {
//             let i;
//             let str = '';
//             for(i = this.front; i !== this.rear; i = (i+1)%this.capacity) {
//                 str += this.items[i] + " "
//             }
//             str += this.items[this.rear];
//             console.log("Queue:", str);
//         }
//     }
// }

// const queue = new circularQueue(5);
// console.log(queue.isEmpty())
// console.log(queue.peek());
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.dequeue();
// queue.print();


// class Queue {
//     constructor() {
//         this.items = {};
//         this.rear = 0;
//         this.front = 0;
//     }

//     enqueue(item) {
//         this.items[this.rear] = item;
//         this.rear++;
//     }

//     dequeue() {
//         if(!this.isEmpty()) {
//             delete this.items[this.front];
//             this.front;
//         }
//     }

//     isEmpty() {
//         return this.rear - this.front === 0;
//     }

//     peek() {
//         return this.items[this.front];
//     }

//     print() {
//         if(!this.isEmpty()) {
//             console.log(this.items);
//         }
//     }
// }

// const queue = new Queue();
// console.log(queue.isEmpty())
// queue.enqueue(10);
// queue.enqueue(20);
// console.log(queue.peek());
// queue.enqueue(30);
// queue.dequeue();
// queue.print();