class Stack<T> {

    area: T[] = []

    public size(): number {
        return this.area.length
    }

    public push(item: T): void {
        this.area.push(item)
    }

    public pop() {
        return this.area.pop()
    }

    public top() {
        return this.area[this.area.length -1]
    }

    public isEmpty(): boolean {
        return this.area.length === 0
    }

    public clear(): void {
        while (!this.isEmpty()) {
            this.area.pop()
        }
    }

}

const stack: Stack<number> = new Stack<number>();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

while(!stack.isEmpty()) {
    console.log(stack.pop())
}
