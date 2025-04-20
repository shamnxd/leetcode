// class Stack {
//     constructor() {
//         this.stack = [];
//     }

//     push(element) {
//         this.stack.push(element);
//     }

//     pop() {
//         if(this.isEmpty()) {
//             return console.log("Stack is empty..");
//         }
//         return this.stack.pop();
//     }

//     isEmpty() {
//         return this.stack.length === 0;
//     }

//     peek() {
//         if(this.isEmpty()) {
//             return console.log("Stack is empty..");
//         }
//         return console.log(this.stack[this.stack.length - 1]);
//     }

//     print() {
//         for(let i = 0; i < this.stack.length; i++) {
//             console.log(this.stack[i])
//         }
//     }
// }

// const stack = new Stack();
// stack.push(0);
// stack.push(1);
// stack.push(2);
// // stack.pop();
// stack.push(3);
// stack.push(4);
// // stack.pop();
// stack.peek();
// // stack.print()

// function reverceString(s) {
//     let stackString = s.split(' ');
//     let newString = '';

//     while(stackString.length > 0) {
//         newString += stackString.pop() + " ";
//     }

//     return newString.trim();
// }

// console.log(reverceString("i love you"));
// console.log(reverceString("this is a longer string"));

// function reverseWord(s) {
//     let splits = s.split(' ');
//     let stack = [];

//     for(let i = 0; i < splits.length; i++) {
//         stack.push(splits[i]);
//     }

//     let finals = '';
//     while(stack.length) {
//         finals += stack.pop() + " ";
//     }

//     return finals;
// }

// console.log(reverseWord("Hello World"));

// function isValid(s) {
//     const stack = [];

//     for(let i = 0; i < s.length; i++) {
//         const char = s[i];

//         if(char === "(" || char === "[" || char === "{") {
//             stack.push(char);
//         } else if (char === ")" || char === "]" || char === "}") {
//             if (stack.length === 0) return false;
//             const top = stack.pop();
//             if(
//                 (char === ")" && top !== "(") || 
//                 (char === "]" && top !== "[") ||
//                 (char === "}" && top !== "{")
//             ) {
//                return false; 
//             }
//         }
//     }
//     return isEmpty(stack);
// }

// function isEmpty(stack) {
//     return stack.length === 0;
// }

// console.log(isValid("({[])"))

// function sortStack(arr) {
//     let temp = [];

//     while (arr.length) {
//         let current = arr.pop();
//         while(temp.length && temp[temp.length -1] < current) {
//             arr.push(temp.pop());
//         }

//        temp.push(current);
//     }

//     while(temp.length) {
//         arr.push(temp.pop());
//     }

//     return arr
// }

// console.log(sortStack([1, 0, 2, 4, 5, 3]));

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null;
//         this.length = 0;
//     }

//     push(value) {
//         let node = new Node(value);
//         if(this.length === 0) {
//             this.top = node;
//         } else {
//             node.next = this.top;
//             this.top = node;
//         }
//         this.length++;
//     }


//     pop() {
//         if(this.length === 0) {
//             return "Stack is Empty..";
//         }
//         let value = this.top;
//         this.top = this.top.next;
//         this.length--;
//         return value.value;
//     }

//     peek () {
//         if(this.length === 0) {
//             return "Stack is Empty..";
//         } 
//         return this.top.value;
//     }   
// }

// const stack = new Stack();
// stack.push(5);
// stack.push(15);
// console.log(stack.pop()); // 15
// console.log(stack.peek()); // 5


// function isValid(s) {
//     let stack = [];

//     for(let i = 0; i < s.length; i++) {
//         let char = s[i];
//         if(char === "(" || char === "{" || char === "[") {
//             stack.push(char);
//         } else {
//             if(stack.length === 0) return false;
//             let top = stack.pop()
//             if((char === "}" && top !== "{") || (char === ")" && top !== "(") || (char === "]" && top !== "[")) {
//                 return false;
//             }
//         }
//     }

//     return stack.length === 0;
// } 

// console.log(isValid("{[]{{}}}"))

// function sortStack(stack) {
//     let newStack = [];

//     while(stack.length) {
//         let current = stack.pop();

//         while(newStack.length && newStack[newStack.length -1] < current) {
//             stack.push(newStack.pop())
//         }
//         newStack.push(current);
//     }
//     while(newStack.length) {
//         stack.push(newStack.pop());
//     }
//     return stack;
// }

// console.log(sortStack([5,3,7,8,9,3,2,1,0]))

// class QueueUsingStack {
//     constructor() {
//         this.s1 = [];
//         this.s2 = [];
//     }

//     enqueue(value) {
//         this.s1.push(value);
//     }

//     dequeue() {
//         if(this.s2.length === 0) {
//             while(this.s1.length > 0) {
//                 this.s2.push(this.s1.pop());
//             }
//         }
//         return this.s2.pop();
//     }

//     front() {
//         if(this.s2.length === 0) {
//             while(this.s1.length > 0) {
//                 this.s2.push(this.s1.pop());
//             }
//         }
//         return this.s2[this.s2.length -1];
//     }
// }

// class Stack {
//     constructor() {
//         this.stack = [];
//     }

//     push(value) {
//         this.stack.push(value);
//     }

//     pop(){
//         return this.stack.pop();
//     } 

//     deleteNode(target) {
//         let tempStack = [];
//         while(this.stack.length > 0) {
//             let top = this.pop();
//             if(target === top) break;
//             tempStack.push(top);
//         }

//         while(tempStack.length > 0) {
//             this.push(tempStack.pop());
//         }
//     }

//     print() {
//         console.log(this.stack);
//     }
// }

// let s = new Stack();
// s.push(10);
// s.push(20);
// s.push(30);
// s.push(40);
// console.log("Before Deletion:");
// s.print(); // [10, 20, 30, 40]

// s.deleteNode(30);
// console.log("After Deleting 30:");
// s.print(); // [10, 20, 40]