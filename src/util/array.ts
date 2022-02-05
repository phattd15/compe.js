/**
 *
 * @param value Cell value
 * @param args Dimensions of the array
 * @returns The multidimensional array
 */

const multi = (value: any, ...args: number[]): any => {
  if (args.length === 0) {
    throw new Error('Please insert integer dimensional values');
  }
  let recursionNonObject: any = (depth: number) => {
    return depth === args.length - 1
      ? Array(args[depth]).fill(value)
      : Array(args[depth])
          .fill(0)
          .map(() => recursionNonObject(depth + 1));
  };
  let recursionArray: any = (depth: number) => {
    return depth === args.length
      ? value.slice()
      : Array(args[depth])
          .fill(0)
          .map(() => recursionArray(depth + 1));
  };
  let recursionObject: any = (depth: number) => {
    return depth === args.length
      ? Object.assign({}, value)
      : Array(args[depth])
          .fill(0)
          .map(() => recursionObject(depth + 1));
  };
  return typeof value != 'object'
    ? recursionNonObject(0)
    : Array.isArray(value)
    ? recursionArray(0)
    : recursionObject(0);
};

export { multi };
