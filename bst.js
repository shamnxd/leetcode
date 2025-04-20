// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     isEmpty() {
//         return this.root === null;
//     }

//     insert(value) {
//         const node = new Node(value);

//         if(this.isEmpty()) {
//             this.root = node;
//         } else {
//             this.insertNode(this.root, node);
//         } 
//     }

//     insertNode(root, node) {
//         if(node.value < root.value) {
//             if(root.left === null) {
//                 root.left = node;
//             } else {
//                 this.insertNode(root.left, node);
//             }
//         } else {
//             if(root.right === null) {
//                 root.right = node;
//             } else {
//                 this.insertNode(root.right, node);
//             }
//         }
//     }

//     search(root, value) {
//         if(!root) {
//             return false;
//         } else {
//             if(root.value ===  value) {
//                 return true;
//             } else if (value < root.value) {
//                 return this.search(root.left, value);
//             } else {
//                 return this.search(root.right, value);
//             }
//         }
//     }

//     preOrder(root) {
//         if(root) {
//             console.log(root.value);
//             this.preOrder(root.left);
//             this.preOrder(root.right);
//         }
//     }

//     inOrder(root)  {
//         if(root) {
//             this.inOrder(root.left);
//             console.log(root.value);
//             this.inOrder(root.right);
//         }
//     }

//     postOrder(root) {
//         if(root) {
//             this.postOrder(root.left);
//             this.postOrder(root.right);
//             console.log(root.value);
//         }
//     }

//     levelOrder(root) {
//         const queue = [];
//         queue.push(root);

//         while(queue.length) {
//             const curr = queue.shift();
//             console.log(curr.value);

//             if(curr.left) {
//                 queue.push(curr.left);
//             }

//             if(curr.right) {
//                 queue.push(curr.right);
//             }
//         }
//     }

//     min(root) {
//         if(!root.left) {
//             return root.value;
//         } else {
//             return this.min(root.left);
//         }
//     }

//     max(root) {
//         if(!root.right) {
//             return root.value;
//         } else {
//             return this.max(root.right);
//         }
//     }

//     maxDepth(root) {
//         if(!root) return 0;
//         let leftDebt = this.maxDepth(root.left);
//         let rightDebt = this.maxDepth(root.right);
//         return Math.max(leftDebt, rightDebt) + 1;
//     }

//     delete(value) {
//         return this.deleteNode(this.root, value);
//     }

//     findSecondLargest(root) {
//         if(!root || (!root.left && !root.right)) return null;
//         let parent = null;
//         let current = root;

//         while(current.right) {
//             parent = current;
//             current = current.right;
//         }

//         if(current.left) return this.max(current.left);
//         return parent.value;
//     }

//     findThirdLargest() {
//        let count = 0;
//        let result = this.findKthLargest(this.root, 3, {count});
//        return result
//     }

//     findKthLargest(root, k, counter) {
//         if(!root) return null;

//         let right = this.findKthLargest(root.right, k, counter);
//         console.log(right)
//         if(right) return right; 

//         counter.count++;
//         if(counter.count === k) return root.value

//         return this.findKthLargest(root.left, k, counter);
//     }

//     // findKthLargest(root, k, counter) {
//     //     if (root) {
//     //         this.findKthLargest(root.right, k, counter);  
//     //         counter.count++; 
//     //         if(counter.count === k) return console.log(root.value)    
//     //         this.findKthLargest(root.left, k, counter);  
//     //     }
//     // }

//     findThirdSmallest() {
//         let count = 0;
//         let result = this.findKthSmallest(this.root, 3, {count});
//         return result;
//     }

//     findKthSmallest(root, k, counter) {
//         if(!root) return null;

//         let left = this.findKthSmallest(root.left, k, counter);
//         if(left) return left;

//         counter.count++;
//         if(counter.count === k) return root.value;

//         return this.findKthSmallest(root.right, k, counter);
//     }

//     isValidBt(root = this.root, min = -Infinity, max = Infinity) {
//         if(!root) return true;

//         if(root.value <= min || root.value >= max) return false;

//         return this.isValidBt(root.left, min, root.value) &&
//               this.isValidBt(root.right, root.value, max);
//     }

//     deleteNode(root, value) {
//         if(!root) return null;
//         if(value < root.value) {
//             root.left = this.deleteNode(root.left, value);
//         } else if (value > root.value) {
//             root.right =  this.deleteNode(root.right, value);
//         } else {
//             if(!root.left && !root.right) return null;
//             if(!root.left) return root.right;
//             if(!root.right) return root.left;

//             let min = this.min(this.right);
//             root.value = min;
//             root.right = this.deleteNode(root.right, value);
//         }
//         return root;
//     }
// } 

// const bst = new BinarySearchTree();
// console.log(bst.isEmpty());

// // console.log(bst.search(bst.root, 13))
// // console.log(bst.search(bst.root, 14))
// bst.insert(3);
// bst.insert(2);
// bst.insert(1);
// bst.insert(4);
// bst.insert(5);
// bst.insert(6);


// // console.log("Pre-Order:");
// // bst.preOrder(bst.root);

// // console.log("In-Order:");
// // bst.inOrder(bst.root);

// // console.log("Post-Order:");
// // bst.postOrder(bst.root);

// // console.log("Level-Order:");
// // bst.levelOrder(bst.root);

// // console.log("Min:" , bst.min(bst.root));
// // console.log("Max:" , bst.max(bst.root));

// // bst.delete(5); // Deleting node with two children

// // console.log("After Deletion:");
// // bst.inOrder(bst.root);

// // console.log("Max Depth:", bst.maxDepth(bst.root));

// // console.log(bst.findThirdSmallest());

// console.log(bst.isValidBt())

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinaryTree {
//     constructor() {
//         this.root = null;
//     }

//     insert(value) {
//         let newNode = new Node(value);
//         if(!this.root) {
//             this.root = newNode;
//             return
//         }

//         let queue = [this.root];

//         while(queue.length) {
//             let current = queue.shift();

//             if(!current.left) {
//                 current.left = newNode
//                 return;
//             } else {
//                 queue.push(current.left);
//             }

//             if(!current.right) {
//                 current.right = newNode
//                 return;
//             } else {
//                 queue.push(current.right);
//             }
//         }
//     }

//     InOrder(root = this.root) {
//         if(root) {
//             this.InOrder(root.left);
//             console.log(root.value);
//             this.InOrder(root.right);
//         }
//     }

//     PreOrder(root = this.root) {
//         if(root) {
//             console.log(root.value);
//             this.PreOrder(root.left);
//             this.PreOrder(root.right);
//         }
//     }

//     PostOrder(root = this.root) {
//         if(root) {
//             this.PostOrder(root.left);
//             this.PostOrder(root.right);
//             console.log(root.value);
//         }
//     }

//     levelOrder() {
//         if(!this.root) return;

//         let queue = [this.root];

//         while(queue.length) {
//             let current = queue.shift();
//             console.log(current.value);

//             if(current.left) queue.push(current.left);
//             if(current.right) queue.push(current.right);
//         }
//     }

//     getDeepestNode() {
//         let queue = [this.root];
//         let lastNode = null, parent = null

//         while(queue.length) {
//             parent = lastNode;
//             lastNode = queue.shift();

//             if(lastNode.left) queue.push(lastNode.left);
//             if(lastNode.right) queue.push(lastNode.right);
//         }

//         return {lastNode, parent};
//     }

//     deleteNode(value) {
//         if(!this.root) return;

//         let queue = [this.root];
//         let nodeToDelete = null;

//         while(queue.length) {
//             let current = queue.shift();

//             if(current.value === value) {
//                 nodeToDelete = current;
//             }

//             if(current.left) queue.push(current.left);
//             if(current.right) queue.push(current.right);
//         }

//         let {lastNode, parent} = this.getDeepestNode();

//         nodeToDelete.value = lastNode.value;

//         if(parent.left === lastNode) {
//             parent.left = null;
//         } else {
//             parent.right = null;
//         }
//     }

//     getHeight(root) {
//         if(!root) return 0;

//         let queue = [root];
//         let heigth = 0;

//         while(queue.length) {
//             let size = queue.length;
//             heigth++;
            
//             for(let i = 0; i < size; i++) {
//                 let current = queue.shift();
//                 if(current.left) queue.push(current.left);
//                 if(current.right) queue.push(current.right);
//             }
//         }

//         return heigth;
//     }

//     isBalanced(root = this.root) {
//         if (!root) return true;
//         let left = this.getHeight(root.left);
//         let right = this.getHeight(root.right);

//         if(Math.abs(left - right) > 1) {
//             return false
//         }

//         return this.isBalanced(root.left) && this.isBalanced(root.right);

//     }
// }

// const tree = new BinaryTree();
// tree.insert(1);
// tree.insert(2);
// tree.insert(3);
// tree.insert(4);
// tree.insert(5);
// tree.insert(6);
// tree.insert(7);

// // console.log("Preorder Traversal:");
// // tree.PreOrder(); // Output: 1 2 4 5 3 6 7

// // console.log("Inorder Traversal:");
// // tree.InOrder(); // Output: 4 2 5 1 6 3 7

// // console.log("Postorder Traversal:");
// // tree.PostOrder(); // Output: 4 5 2 6 7 3 1

// // console.log("Level Order Traversal:");
// // tree.levelOrder(); // Output: 1 2 3 4 5 6 7

// // console.log("Before Deletion:");
// // tree.levelOrder(); // Output: 1 2 3 4 5 6 7

// // tree.deleteNode(3); // Deleting node with value 3

// // console.log("After Deletion:");
// // tree.levelOrder(); 

// console.log("Height of tree:", tree.getHeight(tree.root)); // Output: 3
// console.log("Is tree balanced?", tree.isBalanced()); // Output: True or False based on structure