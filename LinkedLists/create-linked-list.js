class Node {
    constructor(value,next){
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor (value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        let newNode = new Node(value,null);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
        let newNode = new Node(value,this.head);
        this.head = newNode;
        this.length++;
        return this;
    }
    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index,value){
        let newNode = new Node(value,null);
        let leaderPointer = this.traverseToIndex(index-1);
        let holdingPointer = leaderPointer.next;

        leaderPointer.next = newNode;
        newNode.next = holdingPointer;

        this.length++;
        return this;
    }
    remove(index){
        let leader = this.traverseToIndex(index-1);
        let unwantedNode = leader.next;

        leader.next = unwantedNode.next;

        this.length--;
        return this;
    }
    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(4);
myLinkedList.prepend(1);

myLinkedList.insert(2,8);
myLinkedList.insert(4,11);

console.log(myLinkedList.printList());
myLinkedList.remove(5);
console.log(myLinkedList.printList());
myLinkedList.remove(2);

console.log(myLinkedList.printList());