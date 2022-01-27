/**
 * @param value Cell value
 * @param args Dimension of the array
 * @returns The multidimensional array
 */
const multiArray = (value: any, ...args: number[]) => {
  if (args.length == 0) {
    throw new Error('Please insert dimension values');
  } else if (args.length >= 1) {
    if (typeof value == 'object') {
      throw new Error('The value can not be object');
    }
    let arr = [value, []];
    let cur = 0,
      nxt = 1;
    arr[0] = new Array(args[args.length - 1]);
    for (let i = 0; i < arr[0].length; i++) arr[0][i] = value;
    // console.log(arr[0]);
    for (let i = args.length - 2; i >= 0; i--) {
      if (!Number.isInteger(args[i])) {
        throw new Error('Please pass integer arguments for array size');
      }
      arr[nxt] = new Array(args[i]);
      for (let j = 0; j < args[i]; j++) {
        arr[nxt][j] = arr[cur].slice();
      }
      [cur, nxt] = [nxt, cur];
    }
    return arr[cur];
  }
};

/**
 * Return an array of arrays
 * @param size
 * @returns
 */
const vectorArray = (size: number) => {
  let arr = new Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = [];
  }
  return arr;
};

export { multiArray, vectorArray };
