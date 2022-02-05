const min = (a, b) => a < b ? a : b;
const max = (a, b) => a > b ? a : b;
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
const maxElement = (elem) => {
  let res = elem[0], pos = 0;
  for (let i = 0; i < elem.length; i ++) {
    if (elem[i] > res) {
      res = elem[i];
      pos = i;
    }
  }
  return {res, pos};
}
const minElement = (elem) => {
  let res = elem[0], pos = 0;
  for (let i = 0; i < elem.length; i ++) {
    if (elem[i] < res) {
      res = elem[i];
      pos = i;
    }
  }
  return {res, pos};
}
const sort = (array, comparator = (a, b) => (a < b)) => {
  array.sort((x, y) => comparator(x, y) ? -1 : 1);
}
const setGlobalBuiltin = () => {
  global.min = min;
  global.max = max;
  global.gcd = gcd;
  global.minElement = minElement;
  global.maxElement = maxElement;
  global.sort = sort;
}

export {setGlobalBuiltin};