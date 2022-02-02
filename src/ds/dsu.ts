import { multiArray } from '../util/array';

class DSU {
  p: number[];
  constructor(size: number) {
    this.p = multiArray(-1, size + 1);
  }
  /**
   *
   * @param current
   * @returns The index of the leader of that current node's group
   */
  group(current: number): number {
    if (this.p[current] < 0) {
      return current;
    } else {
      this.p[current] = this.group(this.p[current]);
      return this.p[current];
    }
  }
  /**
   *
   * @param a
   * @param b
   * @returns If node a and b successfully joined into the same group
   */
  join(a: number, b: number): boolean {
    a = this.group(a);
    b = this.group(b);
    if (a == b) {
      return false;
    }
    if (this.p[a] > this.p[b]) {
      [a, b] = [b, a];
    }
    this.p[a] += this.p[b];
    this.p[b] = a;
    return true;
  }
  /**
   *
   * @param current
   * @returns The size of the current node's group
   */
  size(current: number): number {
    current = this.group(current);
    return -this.p[current];
  }
}

export { DSU };
