class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.id = Node.nextId++;
    }
}
  
Node.nextId = 100;
  
class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
        current = current.next;
        }

        current.next = newNode;
    }

    display() {
        let current = this.head;
        let nodes = [];
        while (current) {
            nodes.push({
                VALUE: current.data,
                ID: current.id
            });
            current = current.next;
        }

        return nodes;
    }
}

module.exports = Node;
module.exports = LinkedList;