"use strict";
class ArrayStack {
    constructor() {
        this.items = [];
    }
    size() {
        return this.items.length;
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    top() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    clear() {
        while (!this.isEmpty()) {
            this.items.pop();
        }
    }
}
const stack = new ArrayStack();
stack.push(1);
stack.push(2);
console.log('size (2): ', stack.size());
stack.clear();
console.log('size (0): ', stack.size());
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log('top: ', stack.top());
while (!stack.isEmpty()) {
    console.log('pop: ', stack.pop());
}
