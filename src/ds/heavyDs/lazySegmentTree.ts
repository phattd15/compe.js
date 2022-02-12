class LazySegmentTree {
  private cont: any;
  private lazyCont: any;
  private size: number;
  private log: number;
  private identityValue: any;
  private merger: any;
  private identityLazy: any;
  private pusher: any;
  private modifier: any;
  private internalUpdate(index: number) {
    this.cont[index] = this.merger(
      this.cont[index << 1],
      this.cont[(index << 1) | 1]
    );
  }
  private internalModify(index: number, delta: any) {
    if (delta === this.identityLazy) return;
    this.cont[index] = this.modifier(this.cont[index], delta);
    if (index < this.size)
      this.lazyCont[index] = this.pusher(this.lazyCont[index], delta);
  }
  private internalPush(index: number) {
    if (this.lazyCont[index] === this.identityLazy) return;
    this.internalModify(index << 1, this.lazyCont[index]);
    this.internalModify((index << 1) | 1, this.lazyCont[index]);
    this.lazyCont[index] = this.identityLazy;
  }
  /**
   *
   * @param elemCount
   * @param identityValue The identity value of node
   * @param merger Merge function of 2 nodes values
   * @param identityLazy The identity value of lazy
   * @param pusher Function that apply the lazy value from parent to its child
   * @param modifier Function that takes in the node value and lazy value, returns the new node value
   * @param initValue An array of value for initialization
   */
  public constructor(
    elemCount: number,
    identityValue: any,
    merger: any,
    identityLazy: any,
    pusher: any,
    modifier: any,
    initValue: any = null
  ) {
    this.identityValue = identityValue;
    this.merger = merger;
    this.identityLazy = identityLazy;
    this.pusher = pusher;
    this.modifier = modifier;
    this.log = Math.ceil(Math.log2(elemCount));
    this.size = 1 << this.log;
    this.cont = Array(this.size << 1).fill(this.identityValue);
    this.lazyCont = Array(this.size).fill(identityLazy);
    if (initValue) {
      for (let i = 0; i < elemCount; i++) {
        this.cont[this.size + i] = initValue[i];
      }
      for (let i = this.size - 1; i >= 1; i--) {
        this.internalUpdate(i);
      }
    }
  }
  /**
   * Set value at index to new value
   * @param index
   * @param value
   */
  public set(index: number, value: any) {
    index += this.size;
    for (let i = this.log; i >= 1; i--) {
      this.internalPush(index >> i);
    }
    this.cont[index] = value;
    for (let i = 1; i <= this.log; i++) {
      this.internalUpdate(index >> i);
    }
  }
  /**
   *
   * @param index
   * @returns Value at index
   */
  public get(index: number) {
    index += this.size;
    for (let i = this.log; i >= 1; i--) {
      this.internalPush(index >> i);
    }
    return this.cont[index];
  }
  /**
   *
   * @param left
   * @param right
   * @returns Return the range query in [left, right] range
   */
  public query(left: number, right: number) {
    right++;
    left += this.size;
    right += this.size;
    for (let i = this.log; i >= 1; i--) {
      if ((left >> i) << i != left) this.internalPush(left >> i);
      if ((right >> i) << i != right) this.internalPush((right - 1) >> i);
    }
    let sumLeft = this.identityValue;
    let sumRight = this.identityValue;

    while (left < right) {
      if (left & 1) sumLeft = this.merger(sumLeft, this.cont[left++]);
      if (right & 1) sumRight = this.merger(this.cont[--right], sumRight);
      left >>= 1;
      right >>= 1;
    }
    return this.merger(sumLeft, sumRight);
  }
  /**
   *
   * @returns The query on [0, elemCount - 1]
   */
  public all() {
    return this.cont[1];
  }
  /**
   * Update the range query on [left, right] with delta to modify
   * @param left
   * @param right
   * @param delta
   */
  public update(left: number, right: number, delta: any) {
    right++;
    left += this.size;
    right += this.size;
    for (let i = this.log; i >= 1; i--) {
      if ((left >> i) << i != left) this.internalPush(left >> i);
      if ((right >> i) << i != right) this.internalPush((right - 1) >> i);
    }
    let tempLeft = left,
      tempRight = right;
    while (left < right) {
      if (left & 1) this.internalModify(left++, delta);
      if (right & 1) this.internalModify(--right, delta);
      left >>= 1;
      right >>= 1;
    }
    left = tempLeft;
    right = tempRight;
    for (let i = 1; i <= this.log; i++) {
      if ((left >> i) << i != left) this.internalUpdate(left >> i);
      if ((right >> i) << i != right) this.internalUpdate((right - 1) >> i);
    }
  }
}

export { LazySegmentTree };
