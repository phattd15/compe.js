import { setMod, add, sub, mul, pow, inv } from '../mint/modularOperator';

const min = (a, b) => (a < b ? a : b);
const max = (a, b) => (a > b ? a : b);
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const maxElement = elem => {
  let res = elem[0],
    pos = 0;
  for (let i = 0; i < elem.length; i++) {
    if (elem[i] > res) {
      res = elem[i];
      pos = i;
    }
  }
  return { res, pos };
};
const minElement = elem => {
  let res = elem[0],
    pos = 0;
  for (let i = 0; i < elem.length; i++) {
    if (elem[i] < res) {
      res = elem[i];
      pos = i;
    }
  }
  return { res, pos };
};
const sort = (array, comparator = (a, b) => a < b) => {
  array.sort((x, y) => (comparator(x, y) ? -1 : 1));
};
const copy = from => {
  if (from == null || typeof from != 'object') return from;
  if (from.constructor != Object && from.constructor != Array) return from;
  if (
    from.constructor == Date ||
    from.constructor == RegExp ||
    from.constructor == Function ||
    from.constructor == String ||
    from.constructor == Number ||
    from.constructor == Boolean
  )
    return new from.constructor(from);

  let to = new from.constructor();

  for (let name in from) {
    to[name] =
      typeof to[name] == 'undefined' ? copy(from[name], null) : to[name];
  }

  return to;
};
const array = (value, ...args) => {
  if (args.length === 0) {
    throw new Error('Please insert integer dimensional values');
  }
  let recursionNonObject = depth => {
    return depth === args.length - 1
      ? Array(args[depth]).fill(value)
      : Array(args[depth])
          .fill(0)
          .map(() => recursionNonObject(depth + 1));
  };
  let recursionObject = depth => {
    return depth === args.length
      ? copy(value)
      : Array(args[depth])
          .fill(0)
          .map(() => recursionObject(depth + 1));
  };
  return typeof value != 'object' ? recursionNonObject(0) : recursionObject(0);
};
const setGlobalBuiltin = () => {
  global.min = min;
  global.max = max;
  global.gcd = gcd;
  global.minElement = minElement;
  global.maxElement = maxElement;
  global.sort = sort;
  global.copy = copy;

  // Math
  global.sqrt = x => Math.sqrt(x);
  global.ceil = x => Math.ceil(x);
  global.floor = x => Math.floor(x);
  global.log = (x, y) => Math.log(x, y);
  global.abs = x => (x < 0 ? -x : x);

  // Modint
  global.setMod = setMod;
  global.add = add;
  global.sub = sub;
  global.mul = mul;
  global.pow = pow;
  global.inv = inv;

  // Extra utils
  global.array = array;
  global.clog = (...args) => console.log(...args);

  // CONSTANT
  global.INT_MAX = Number.MAX_SAFE_INTEGER;
  global.INT_MIN = Number.MIN_SAFE_INTEGER;
  global.PI = Math.PI;
};

export { setGlobalBuiltin };
