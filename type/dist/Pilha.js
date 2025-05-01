"use strict";
class Stack {
    constructor() {
        this.area = [];
    }
    size() {
        return this.area.length;
    }
    push(item) {
        this.area.push(item);
    }
    pop() {
        return this.area.pop();
    }
    top() {
        return this.area[this.area.length - 1];
    }
    isEmpty() {
        return this.area.length === 0;
    }
    clear() {
        while (!this.isEmpty()) {
            this.area.pop();
        }
    }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
while (!stack.isEmpty()) {
    console.log(stack.pop());
}
