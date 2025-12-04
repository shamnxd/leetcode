// class TireNode {
//     constructor() {
//         this.children = {};
//         this.isWordEnd = false;
//     }
// }

// class Trie {
//     constructor() {
//         this.root = new TireNode(); 
//     }

//     insert(word) {
//         let node = this.root;

//         for(let char of word) {
//             if(!node.children[char]) {
//                 node.children[char] = new TireNode();
//             }
//             node = node.children[char];
//         }

//         node.isWordEnd = true
//     }

//     search(word) {
//         let node = this.root;

//         for(let char of word) {
//             if(!node.children[char]) {
//                 return false
//             }
//             node = node.children[char];
//         }

//         return node.isWordEnd;
//     }

//     startsWith(prefix) {
//         let node = this.root;

//         for(let char of prefix) {
//             if(!node.children[char]) {
//                 return false;
//             }
//             node = node.children[char];
//         }
//         return true;
//     }

//     delete(word) {
//         let node = this.root;
//         let stack = [];

//         for(let char of word) {
//             if(!node.children[char]) return;
//             stack.push([node, char]);
//             node = node.children[char];
//         }

//         if(!node.isWordEnd) return false
//         node.isWordEnd = false;

//         for(let i = stack.length -1; i >= 0; i--) {
//             let [parent, char] = stack[i];
//             if(!node.isWordEnd && Object.keys(node.children) === 0) {
//                 delete node.children[char];
//             } else {
//                 break;
//             }

//             node = parent;
//         }
//         return true
//     }

//     isEmpty() {
//         return Object.keys(this.root.children).length === 0
//     }

//     autoComplete(prefix) {
//         let node = this.root;

//         for(let char of prefix) {
//             if(!node.children[char]) return []
//             node = node.children[char];
//         }
//         let queue = [[node, prefix]];
//         let words = [];
        
//         while(queue.length > 0) {
//             let [currentNode, currentWord] = queue.shift();

//             if(currentNode.isWordEnd) {
//                 words.push(currentWord);
//             }

//             for(let char in currentNode.children) {
//                 queue.push([currentNode.children[char], currentWord + char]);
//             }
//         }
//         return words
//     }
// }

// const trie = new Trie();

// trie.insert("cat");
// trie.insert("car");
// trie.insert("cup");
// trie.insert("cop");
// trie.insert("camel");
// trie.insert("carpender");
// trie.insert("mat");
// trie.insert("mar");
// trie.insert("mcup");
// trie.insert("mcop");
// trie.insert("ncamel");
// trie.insert("bcarpender");

// // console.log(trie.delete("car"))

// // console.log(trie.search("car"))
// // console.log(trie.startsWith("ca"))

// console.log(trie.autoComplete("m"))

class SuffixTreeNode {
    constructor() {
        this.children = {};
    }
}

class SuffixTree {
    constructor(text) {
        this.root = new SuffixTreeNode();
        this.buildSuffixTree(text);
    }

    buildSuffixTree(text) {
        for(let i = 0; i < text.length; i++) {
            this.insertSuffix(text.substring(i));
        }
    }
}