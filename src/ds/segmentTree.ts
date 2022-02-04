class SegmentTree {
  private cont: any; 
  private elemCount: any; 
  private size: number; 
  private log: number;
  private identityValue: any; 
  private merger: any;
  private internalUpdate(index: number) {
    this.cont[index] = this.merger(this.cont[index << 1], this.cont[index << 1 | 1]);
  }
  /**
   * 
   * @param elemCount Number of elements
   * @param identityValue The identity value of merge operation
   * @param merger Merging operation
   * @param initValue The initial value of the tree, can be left blank to initialize as all identity value
   */
  public constructor(elemCount: number, identityValue: any, merger: any, initValue: any = null) {
    this.identityValue = identityValue;
    this.merger = merger;
    this.elemCount = elemCount;
    this.log = Math.ceil(Math.log2(elemCount));
    this.size = 1 << this.log;
    this.cont = Array(elemCount << 1).fill(this.identityValue);
    if (initValue) {
      for (let i = 0; i < elemCount; i ++) {
        this.cont[this.size + i] = initValue[i];
      }
      for (let i = this.size - 1; i >= 1; i --) {
        this.internalUpdate(i);
      }
    }
  }
  /**
   * Set element at position index with value (not updating with that value through merger)
   * @param index 
   * @param value 
   */
  public set(index: number, value: any) {
    index += this.size;
    this.cont[index] = value;
    for (let i = 1; i <= this.log; i ++)
      this.internalUpdate(index >> i);
  }
  /**
   * 
   * @param index 
   * @returns Return element at index if a number is the argument, else if blank will return the whole array
   */
  public get(index: any): any {
    if (index) return this.cont[index + this.size];
    else return this.cont.slice(this.size, this.size + this.elemCount);
  }
  /**
   * 
   * @param left 
   * @param right 
   * @returns The operation on the range [left, right]
   */
  public query(left: number = 0, right: number = this.elemCount - 1) {
    right ++;
    let sumLeft = this.identityValue, sumRight = this.identityValue;
    left += this.size;
    right += this.size;
    while (left < right) {
      if (left & 1) sumLeft = this.merger(sumLeft, this.cont[left ++]);
      if (right & 1) sumRight = this.merger(this.cont[-- right], sumRight);
      left >>= 1;
      right >>= 1;
    }
    return this.merger(sumLeft, sumRight);
  }
  /**
   * 
   * @returns The operation applied on the whole array
   */
  public all() {
    return this.cont[1];
  }
}

export {SegmentTree};