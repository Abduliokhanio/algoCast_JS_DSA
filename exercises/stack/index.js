// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack { //fifo

    constructor(){
        this.data = []
    }

   push(n){
       this.data.unshift(n)
   }

   pop(){
        return this.data.shift()
   }

   peek(){
        return this.data[0]
   }
}

module.exports = Stack;
