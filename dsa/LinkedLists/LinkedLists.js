class Node {
    constructor (value, prev, next) {
        this.value = value
        this.next = next || null
        this.prev = prev || null
    }
}

class DoubleLinkedList {
    constructor () {
        this.head = this.tail = null
    }

    append(value) {
        // if list is empty
        if (!this.tail) {
            this.head = this.tail = new Node(value)
        }
        else {
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
            this.tail.prev = oldTail
        }
    }

    prepend(value) {
        if (!this.head) {
            this.head = this.tail = new Node(value)
        }
        // if linkedlist has >= one node
        else {
            let oldHead = this.head
            this.head = new Node(value)
            oldHead.prev = this.head
            this.head.next = oldHead
        }
    }

    deleteHead() {
        if (!this.head) {
            return null
        }
        else {
            let removedHead = this.head
            // if list has only 1 node left
            if (this.head === this.tail) {
                this.head = this.tail = null
            }
            //if list has >1 node
            else {
                this.head = this.head.next
                this.head.prev = null
            }
            return removedHead.value
        }
    }

    deleteTail() {
        if (!this.tail) {
            return null
        }
        else {
            let removedTail = this.tail
            // if list has only 1 node left
            if (this.head === this.tail) {
                this.tail = this.head = null
            }
            //if list has >1 node
            else {
                this.tail = this.tail.prev
                this.tail.next = null
            }
            return removedTail.value
        }
    }
    search(value) {
        let currentNode = this.head

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode
            }
            currentNode = currentNode.next
        }

        return null
    }
}
module.exports = {
    DoubleLinkedList: DoubleLinkedList
}
