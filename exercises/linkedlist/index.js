// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

    constructor(data,next = null){
        this.data = data; 
        this.next = next
    }
    
}

class LinkedList {

    constructor(){
        this.head = null
    }

    insertFirst(data){

        let nn = new Node(data,this.head)

        this.head = nn
    }

    size(){
        let node = this.head
        let counter = 0
        while(node){
            counter++
            node = node.next
        }

        return counter
    }

    getFirst(){
        return this.head
    }

    getLast(){
        let node = this.head
        if(!node){
            return null
        }

        while(node){

            if(!node.next){
                return node
            }

            node = node.next
        }

    }

}

module.exports = { Node, LinkedList };
