interface Stack<T> {
    size(): number,
    push(item: T): void,
    pop(): T | undefined,
    top(): T,
    isEmpty(): boolean,
    clear(): void,
}

class ArrayStack<T> implements Stack<T>{

    private items: T[] = [];

    size(): number {
        return this.items.length;
    }

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    top() {
        return this.items[this.items.length -1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    clear(): void {
        while (!this.isEmpty()) {
            this.items.pop();
        }
    }

}

const stack: ArrayStack<number> = new ArrayStack<number>();

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

while(!stack.isEmpty()) {
    console.log('pop: ', stack.pop());
}
