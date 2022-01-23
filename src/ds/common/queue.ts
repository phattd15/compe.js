export class Queue<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) {}

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("Queue has reached max capacity, you cannot add more items");
    }
    this.storage.push(item);
  }
  pop(): T | undefined {
    if (this.size() <= 0) {
      throw Error("Queue is empty, cannot pop the front element");
    }
    return this.storage.shift();
  }
  front(): T | undefined {
    if (this.size() <= 0) {
      throw Error("Queue is empty, cannot retrieve the front element");
    }
    return this.storage[0];
  }
  size(): number {
    return this.storage.length;
  }
}