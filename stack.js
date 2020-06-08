class Stack {
    // A constructor enables you to provide any custom initialization 
    // that must be done before any other methods can be called on an instantiated object.
    constructor(){
        this.items = []
        this.count = 0
    }

    // Add element to the top of the stack
    push(element){
        this.items[this.count] = element
        console.log(`${element} was added to the ${this.count} index`)
        this.count += 1

        return this.count - 1
    }

    // Return and remove top element in stack
    pop(){
        // if stack is empty return undefined
        if (this.count == 0){
            // console.log(`Stack is empty`);
            return undefined
        }

        let deleteItem = this.items[this.count - 1]
        let temp_items = []
        this.count -= 1

        for (let i = 0; i < this.count; i++) {
            temp_items[i] = this.items[i]
        }

        this.items = temp_items

        console.log(`${deleteItem} was removed from stack`);

        return deleteItem
    }

    // Display the stack
    print(){
        return this.items
    }

    isEmpty(){
        return this.count === 0 ? 'Stack is empty.' : 'Stack is not empty.'
    }
}

// class declaration
const stack = new Stack()

stack.push(100)
stack.push(300)
stack.push(500)

console.log(stack.isEmpty());
console.log('Stack: ', stack.print());

stack.pop()
stack.pop()

console.log(stack.isEmpty());
console.log('Stack: ', stack.print());

stack.pop()

console.log(stack.isEmpty());
console.log('Stack: ', stack.print());