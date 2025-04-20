// class HashTable {
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//     }

//     hash(key) {
//         let total = 0;
//         for(let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i);
//         }

//         return total % this.size;
//     }

//     set(key, value) {
//         const index = this.hash(key);
//         this.table[index] = value;
//     }

//     get(key) {
//         const index = this.hash(key);
//         return this.table[index];
//     }

//     remove(key) {
//         const index = this.hash(key);
//         this.table[index] = undefined;
//     }

//     display() {
//         for(let i = 0; i < this.table.length; i++) {
//             if(this.table[i]) {
//                 console.log(i, this.table[i])
//             }
//         }
//     }
// }

// const table = new HashTable(50);

// table.set("name", "Shamnad");
// table.set("age", 19);

// table.display();
// console.log(table.get("name"));
// table.remove("name") 
// table.set("mane", "Aflal");
// table.display();

// class HashTable {
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//     }

//     hash(key) {
//         let total = 0;
//         for(let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }

//     set(key, value) {
//         let index = this.hash(key);
//         let bucket = this.table[index];
//         if(!bucket) {
//            this.table[index] = [[key, value]];
//         } else {
//             let sameKey = bucket.find((item) => item[0] === key);
//             if(sameKey) {
//                 sameKey[1] = value; 
//             } else {
//                 bucket.push([key, value]);
//             }
//         }
//     }

//     get(key) {
//         let index = this.hash(key);
//         let bucket = this.table[index];
//         if(bucket) {
//             let sameKey = bucket.find(item => item[0] === key);
//             if(sameKey) {
//                 return sameKey[1]
//             }
//         } else {
//             return undefined;
//         }
//     }

//     remove(key) {
//         let index = this.hash(key);
//         let bucket = this.table[index];
//         if(bucket) {
//             let sameKey = bucket.find(item => item[0] === key);
//             if(sameKey) {
//                 bucket.splice(bucket.indexOf(sameKey), 1);
//             }
//         } else {
//             return -1
//         }
//     }

//     set(key, value) {
//         let index = this.hash(key);
//         let bucket = this.table[index];
//         if(!bucket) {
//            this.table[index] = [[key, value]];
//         } else {
//             let sameKey = bucket.find((item) => item[0] === key);
//             if(sameKey) {
//                 sameKey[1] = value;
//             } else {
//                 bucket.push([key, value]);
//             }
//         }
//     }
    

//     display() {
//         for(let i = 0; i < this.size; i++) {
//             if(this.table[i]) {
//                 console.log(i, this.table[i]);
//             }
//         }
//     }
// }

// const table = new HashTable(50);

// table.set("name", "Shamnad");
// table.set("age", 19);

// // table.display();
// table.remove("name") 
// table.set("mane", "Aflal");
// table.display();

// console.log(table.get("mane"));


// class HashTable {
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//     }

//     hash(key) {
//         let total = 0;
//         for(let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }

//     set(key, value) {
//         const index = this.hash(key);
//         let bucket = this.table[index];
//         if(!bucket) {
//             this.table[index] = [[key, value]];
//         } else {
//             let sameKey = bucket.find(item => item[0] === key);
//             if(sameKey) {
//                 sameKey[1] = value;
//             } else {
//                 bucket.push([key, value])
//             }
//         }
//     }

//     get(key) {
//         const index = this.hash(key);
//         let bucket = this.table[index];
//         if(bucket) {
//             let sameKey = bucket.find(item => item[0] === key);
//             return sameKey[1];
//         } else {
//             return undefined;
//         }
//     }

//     remove(key) {
//         const index = this.hash(key);
//         let bucket = this.table[index];
//         if(bucket) {
//             let sameKey = bucket.find(item => item[0] === key);
//             bucket.splice(bucket.indexOf(sameKey));
//         } else {
//             return undersrads                                                                                                                                                                                                                                                                                                                
//         }
//     }

//     display() {
//         for(let i = 0; i < this.table.length; i++) {
//             if(this.table[i]) {
//                 console.log(i, this.table[i])
//             }
//         }
//     }
// }

// const table = new HashTable(50);

// table.set("age", 19);

// table.display();
// table.set("name", "Shamnad");
// table.remove("age"); 
// table.set("mane", "Aflal");
// table.display();

// console.log(table.get("mane"));

// class HashTable {
//     constructor(size) {
//         this.size = size;
//         this.table = new Map();
//     }

//     hash(key) {
//         let total = 0;
//         for(let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }

//     set(key, value) {
//         const index = this.hash(key);
//         if(!this.table.has(index)) {
//             this.table.set(index, new Map());
//         }
//         this.table.get(index).set(key, value);
//     }

//     get(key) {
//         const index = this.hash(key);
//         return this.table.has(index) ? this.table.get(index).get(key) : undefined;
//     }

//     // remove(key) {
//     //     const index = this.hash(key);
//     //     if()
//     // }
// }

// function leastOccurence(arr) {
//     let table = {};

//     for(let i = 0; i < arr.length; i++) {
//         table[arr[i]] = (table[arr[i]] || 0) +1
//     }

//     let occur = Infinity;
//     let key;

//     for(let i in table) {
//         if(occur > table[i]) {
//             key = i;
//             occur = table[i];
//         }
//     } 
//     console.log(key, occur)

//     return table
// } 

// console.log(leastOccurence([1,6,5,4,9,8,1,1,2,2,3,3,3,4,4,5,5,4,6,9,4,4,7,7,7,7]))

// function leastOccurence(arr) {
//     let map = new Map();

//     for(let i of arr) {
//         map.set(i, (map.get(i) || 0) +1);
//     }

//     let occur = Infinity;
//     let leastKey = null;
//     for(let [key, count] of map)  {
//         if(occur > count) {
//             occur = count;
//             leastKey = key
//         }
//     }

//     console.log(leastKey, occur)

//     return map
// }

// console.log(leastOccurence([1,1,1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,6]))

// function isAnagaram(s, t) {
//     if (s.length !== t.length) return false;
//     let table = {};

//     for(let char of s) {
//         table[char] = (table[char] || 0) +1;
//     }

//     for(let char of t) {  
//         if(!table[char]) return false;
//         table[char]--;        
//     }

//     return true;
// }

// console.log(isAnagaram("lolo", "ollo"));

// function isAnagaram(s, t) {
//     if(s.length !== t.length) return false;

//     let map = new Map();

//     for(let i of s) {
//         map.set(i, (map.get(i) || 0) +1);
//     }

//     for(let i of t) {
//         if(!map.has(i)) return false;
//         map.set(i, map.get(i)-1)
//     }

//     return true;
// }
// console.log(isAnagaram("olol", "ollo"));

// function dupString(s) {
//     let map = new Map();
//     for(let char of s) {
//         if(map.has(char)) return true;
//         map.set(char, true);
//     }

//     return false;
// }

// console.log(dupString("helo"));

function twoSum(nums, target) {
    let map = new Map();

    for(let i = 0; i < nums.length; i++) {
        let comp = target - nums[i];
        if(map.has(comp)) return [map.get(comp), i];

        map.set(nums[i], i);
    }
    return [];
}

console.log(twoSum([3, 7, 2, 15], 9));
