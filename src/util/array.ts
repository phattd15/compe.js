/**
 * @param value Cell value
 * @param args Dimension of the array
 * @returns The multidimensional array
 */
const multiArray = (value: any, ...args: number[]) => {
  if (args.length == 0) {
    throw new Error('Please insert dimension values');
  } else if (args.length >= 1) {
    let arr = [value, []];
    let cur = 0,
      nxt = 1;
    for (let i = args.length - 1; i >= 0; i--) {
      if (!Number.isInteger(args[i])) {
        throw new Error('Please pass integer arguments for array size');
      }
      arr[nxt] = [];
      for (let j = 0; j < args[i]; j++) {
        arr[nxt].push(arr[cur]);
      }
      cur = 1 - cur;
      nxt = 1 - nxt;
    }
    return arr[cur];
  }
};

export { multiArray };
