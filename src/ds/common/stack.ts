export class Stack<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) {}

  push(item: T): void {
    if (this.storage.length === this.capacity) {
      throw Error("Stack maximum capacity reached, cannot add new items");
    }
    this.storage.push(item);
  }

  pop(): T | undefined {
    if(this.size() <= 0) {
      throw Error("Stack is empty, cannot pop the top element");
    }
    return this.storage.pop();
  }

  top(): T | undefined {
    if(this.size() <= 0) {
      throw Error("Stack is empty, cannot retrieve the top element");
    }
    return this.storage[this.size() - 1];
  }

  size(): number {
    return this.storage.length
  }
}