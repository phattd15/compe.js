class FenwickTree {
  cont: any[];
  identityValue: any;
  updateMethod: any;
  elemCount: number;
  /**
   *
   * @param elemCount The number of elements that the tree supports
   * @param identityValue The null value regarding the operation
   * @param updateMethod The combination function of node
   */
  constructor(
    elemCount: number,
    identityValue: any = 0,
    updateMethod: any = (a: any, b: any) => a + b
  ) {
    this.identityValue = identityValue;
    this.updateMethod = updateMethod;
    this.elemCount = elemCount;
    this.cont = Array(elemCount + 1).fill(identityValue);
  }
  query(index: number) {
    let res = this.identityValue;
    for (; index >= 0; index = (index & (index + 1)) - 1)
      res = this.updateMethod(res, this.cont[index]);
    return res;
  }
  update(index: number, delta: any) {
    for (; index <= this.elemCount; index |= index + 1)
      this.cont[index] = this.updateMethod(this.cont[index], delta);
  }
}

export { FenwickTree };
