/**
 * Set the mod for system to work
 * @param mod
 */
const setMod = mod => {
  global.MOD_ = mod;
  global.MOD_CUT = 1099511627776 % mod;
};

/**
 * @param args
 * @returns The sum of arguments after taking mod division
 */
const add = (...args) => {
  for (let i = args.length - 1; i >= 1; i--) {
    args[0] += args[i];
    args[0] = args[0] >= global.MOD_ ? args[0] - global.MOD_ : args[0];
  }
  return args[0];
};

/**
 * @param a
 * @param b
 * @returns (a - b) % mod
 */
const sub = (a, b) => {
  a += global.MOD_ - b;
  return a >= global.MOD_ ? a - global.MOD_ : a;
};

/**
 * Source: https://atcoder.jp/users/catoon
 * @param args
 * @returns Mod product of the arguments
 */
const mul = (...args) => {
  let res = args[0];
  for (let i = 1; i < args.length; i++) {
    res =
      ((res >> 20) * (args[i] >> 20) * global.MOD_CUT +
        (res & 4293918720) * (args[i] & 1048575) +
        (res & 1048575) * args[i]) %
      global.MOD_;
  }
  return res;
};

/**
 *
 * @param base
 * @param exponent
 * @returns Power in mod division
 */
const pow = (base, exponent) => {
  let res = 1;
  while (exponent) {
    if (exponent & 1) res = mul(res, base);
    base = mul(base, base);
    exponent >>>= 1;
  }
  return res;
};

/**
 *
 * @param x
 * @returns The inverse modular of x
 */
const inv = x => {
  for (let a = 1, b = 0, y = global.MOD_, q; y; [b, a] = [a, b - q * a]) {
    (q = (y / x) | 0), ([y, x] = [x, y - q * x]);
  }
  return a < 0 ? a + global.MOD_ : a;
};

export { setMod, add, sub, mul, pow, inv };
