class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
       this.head = null;
       this.size = 0; 
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    addFirst(value) {
        let node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;   
        } else {
            node.next = this.head;
            this.head = node;   
        }
        this.size++;
    }

    addLast(value) {
        let node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node
        }
        this.size++;
    }

    insert(value, index) {
        if(index < 0 || index >= this.size) {
            return console.log("Invalid Index");
        }
        if (index === 0) {
            this.addFirst(value);
        } else if (index === this.size) {
            this.addLast(value);
        } else {
          let node = new Node(value); 
          let prev = this.head;
          for(let i = 0; i < index -1; i++){
            prev = prev.next
          }
          node.next = prev.next
          prev.next = node
        }
        this.size++;
    }

    removeFirst() {
        if(this.isEmpty()) {
            return console.log("The list is Empty");
        }

        this.head = this.head.next
        this.size--;
    }

    removeLast() {
        if(this.isEmpty()) {
            return console.log("The list is Empty");
        }

        if(this.size === 1) {
            this.head = null
        }else {
            let prev = this.head;
            while(prev.next) {
                prev = prev.next
            }
            prev.next = null
        }
        this.size--;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while(current) {
            next = current.next;
            current.next = prev
            prev = current
            current = next;
        }
        this.head = prev
    }

    remove(index) {
        if(index < 0 || index > this.size) {
            console.log("Invalid Index");
            return 
        }
        if(index === 0) {
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for(let i = 0; i < index -1; i++) {
                prev = prev.next;
            }
            prev.next = prev.next.next
        }
        this.size--;
    }

    removeValue(value) {
        if(this.isEmpty()) {
           console.log("The list is Empty");
           return 
        }

        if(this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return;
        } 

        let prev = this.head;
        let current = this.head.next;

        while (current){
            if(current.value === value) {
                prev.next = current.next;
                this.size--;
                return;
            }
            prev = current;
            current = current.next
        }
        console.log(`Value ${value} not found in the list`);
    } 

    print() {
        if(this.isEmpty()) {
            console.log("The list is Empty");
        } else {
            let current = this.head;
            let listValues = [];
            while(current) {
                listValues.push(current.value);
                current = current.next;
            }
            console.log(listValues.join(" -> "));
        }
    }
}

const list = new LinkedList()

list.addFirst(3);
list.addFirst(2);
list.addFirst(1);
list.addLast(4);
list.addLast(5);
list.addLast(6);

// list.insert(10,2);
// list.insert(5,7);

// console.log("List is empty?. " + list.isEmpty());
// console.log("List size " + list.getSize());

// list.addFirst(10);
// list.addLast(20);
// list.insert(15, 1);
// list.print();  // Output: 10 -> 15 -> 20
// list.removeValue(11);
list.print();  // Output: 10 -> 20
list.reverse()
list.print(); 