class PriorityQueue {
  comparator: (a: any, b: any) => boolean;
  elem: any[];
  /**
   *
   * @param comparator The comparator between 2 elements that return true if the left one will be smaller than the right one. By default it is A < B, resulting in a PQ returning biggest element.
   */
  constructor(comparator?: (a: any, b: any) => boolean) {
    if (comparator) {
      this.comparator = comparator;
    } else {
      this.comparator = (a: any, b: any) => a < b;
    }
    this.elem = [];
  }
  /**
   * @returns Size of the PriorityQueue.
   */
  get size(): number {
    return this.elem.length;
  }
  /**
   * Return the biggest element.
   */
  get top(): any {
    if (this.elem.length == 0) {
      throw new Error('PriorityQueue is empty');
    } else {
      return this.elem[0];
    }
  }
  swap(indexLeft: number, indexRight: number) {
    [this.elem[indexLeft], this.elem[indexRight]] = [
      this.elem[indexRight],
      this.elem[indexLeft],
    ];
  }
  /**
   *
   * @param newElem
   * @returns Push the new element to the PriorityQueue
   */
  push(newElem: any) {
    let current = this.elem.push(newElem) - 1;
    let parent = 0;
    while (current > 0) {
      parent = current >> 1;
      if (this.comparator(this.elem[current], this.elem[parent])) {
        break;
      }
      this.swap(current, parent);
      current = parent;
    }
    return;
  }
  /**
   * Remove the highest element from the data structure.
   * @returns The highest element
   */
  pop() {
    let first = this.top;
    let last = this.elem.pop();
    let size = this.size;
    if (size == 0) return first;
    this.elem[0] = last;
    let current = 0;
    let largest = 0,
      left = 0,
      right = 0;
    while (current < size) {
      largest = current;
      left = (current << 1) + 1;
      right = (current << 1) + 2;
      if (
        left < size &&
        !this.comparator(this.elem[left], this.elem[largest])
      ) {
        largest = left;
      }
      if (
        right < size &&
        !this.comparator(this.elem[right], this.elem[largest])
      ) {
        largest = right;
      }
      if (largest == current) break;
      this.swap(largest, current);
      current = largest;
    }
    return first;
  }
}

export { PriorityQueue };
