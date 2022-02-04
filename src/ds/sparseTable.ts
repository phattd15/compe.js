class SparseTable {
  private cont: any;
  private logFactor: number;
  private merger: any;
  private maxGap: number = 0;
  private floorLog2(x: number) {
    return 31 - Math.clz32(x);
  }
  /**
   *
   * @param initValue The array of init value at positions (0-indexed)
   * @param merger The combinator function, must be idempotent, by default it is min function
   */
  public constructor(
    initValue: any,
    merger: any = (a: any, b: any) => (a < b ? a : b)
  ) {
    let elemCount = initValue.length;
    this.logFactor = this.floorLog2(elemCount);
    this.merger = merger;
    this.cont = Array(elemCount)
      .fill(0)
      .map(() => Array(this.logFactor + 1));
    for (let i = 0; i < elemCount; i++) {
      this.cont[i][0] = initValue[i];
    }
    for (let j = 1; j <= this.logFactor; j++) {
      for (let i = 0; i + (1 << j) - 1 < elemCount; i++) {
        this.cont[i][j] = merger(
          this.cont[i][j - 1],
          this.cont[i + (1 << (j - 1))][j - 1]
        );
      }
    }
  }
  /**
   *
   * @param leftBound
   * @param rightBound
   * @returns Return the query on [leftBound, rightBound]
   */
  public query(leftBound: number, rightBound: number) {
    this.maxGap = this.floorLog2(rightBound - leftBound + 1);
    return this.merger(
      this.cont[leftBound][this.maxGap],
      this.cont[rightBound - (1 << this.maxGap) + 1][this.maxGap]
    );
  }
}

export { SparseTable };
