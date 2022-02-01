import { mul, inv } from './modularOperator';

/**
 * Setup the factorial, stored at global.factorial and global.invFactorial.
 * @param maxRange
 */
const factSetup = (maxRange = 200000) => {
  global.factorial = Array(maxRange + 1).fill(1);
  global.invFactorial = Array(maxRange + 1).fill(1);
  for (let i = 1; i <= maxRange; i++) {
    global.factorial[i] = mul(global.factorial[i - 1], i);
  }
  global.invFactorial[maxRange] = inv(global.factorial[maxRange]);
  for (let i = maxRange - 1; i >= 1; i--) {
    global.invFactorial[i] = mul(global.invFactorial[i + 1], i + 1);
  }
};

/**
 *
 * @param {number} n
 * @param {number} k
 * @returns nCk % mod
 */
const binom = (n, k) => {
  if (k > n) return 0;
  return mul(
    global.factorial[n],
    global.invFactorial[k],
    global.invFactorial[n - k]
  );
};

/**
 *
 * @param {number} x
 * @returns x! % mod
 */
const fact = x => {
  return global.factorial[x];
};

export { factSetup, binom, fact };
