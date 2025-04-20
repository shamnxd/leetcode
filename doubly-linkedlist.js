class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0 ? true : false
    }
    addAt(value) {
        let node = new Node(value);

        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    remove(value) {
        if(this.isEmpty()) {
            return console.log("List is Empty..");
        }

        let current = this.head;

        while(current && current.value !== value) {
            current = current.next;
        }
        
        if(!current) {
            return console.log("Target is not found..");
        }

        if(current === this.head) {
            this.head = current.next
            if(this.head) {
                this.head.prev = null;
            } 
        } else if (current === this.tail) {
            this.tail = current.prev;
            if(this.tail) {
                this.tail.next = null;
            }
        } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }

        this.size--;
    }

    insertBefore(value, target) {
        if (this.isEmpty()) {
            return console.log("List is Empty..");
        }
    
        let node = new Node(value);
        let current = this.head;
    
        while (current && current.value !== target) {
            current = current.next;
        }
        
        if (!current) {
            return console.log("Target not found..");
        }
        
        if(current === this.head) {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
            return
        } else {
            node.prev = current.prev
            node.next = current
            current.prev.next = node
            current.prev = node
        }

        this.size++;
    }

    insertAfter(value, target) {
        if (this.isEmpty()) {
            return console.log("List is Empty..");
        }

        let node = new Node(value);
        let current = this.head;

        while(current && current.value !== target) {
            current = current.next;
        }

        if(!current) {
            return console.log("Target not found..");
        }
        if (target == this.head.value) {
            node.prev = this.head;
            node.next = this.head.next;
            this.head.next.prev = node
            this.head.next = node
        } else if (current === this.tail) {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        } else {
            node.next = current.next
            node.prev = current
            current.next.prev = node;
            current.next = node;
        }

        this.size++;
    }

    removeValue(target) {
        if (this.isEmpty()) {
            return console.log("List is Empty..");
        }

        let current = this.head;
        while(current && current.value !== target) {
            current = current.next;
        }

        if(!current) {
            return console.log("Target not found..");
        }

        if(current === this.head) {
            this.head = current.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null; // If the list is empty after deletion
            }
        } else if (current === this.tail) {
            this.tail =  current.prev;
            if (this.tail) {
                this.tail.next = null;
            }
        } else {
            current.next.prev = current.next;
            current.prev.next = current.next;
        }
        this.size--;
    }

    print() {

        if(this.isEmpty()) {
            return console.log("List is Empty..");
        }

        let result = [];
        let current = this.head;

        while(current) {
            result.push(current.value);
            current = current.next;
        }

        console.log(result.join(' -> '));
    }
}

let list = new LinkedList();
list.addAt(1)
list.addAt(2)
list.addAt(3)
list.print();
// list.remove(20)
// list.print();
// list.insertAfter(20,5)
list.removeValue(1)
list.print();