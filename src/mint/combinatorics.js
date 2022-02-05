import { mul, inv, add } from './modularOperator';
import { multi } from '../util/array';
/**
 * Setup the necessary tools for binomial computing
 * @param maxRange
 */
const binomSetup = (maxRange = 200000, enableFastBinom = false) => {
  global.factorial = Array(maxRange + 1).fill(1);
  global.invFactorial = Array(maxRange + 1).fill(1);
  for (let i = 1; i <= maxRange; i++) {
    global.factorial[i] = mul(global.factorial[i - 1], i);
  }
  global.invFactorial[maxRange] = inv(global.factorial[maxRange]);
  for (let i = maxRange - 1; i >= 1; i--) {
    global.invFactorial[i] = mul(global.invFactorial[i + 1], i + 1);
  }
  if (enableFastBinom) {
    if (maxRange > 2000) {
      throw new Error('Fast Binomial is only available for under 2000 range');
    }
    global.fastBinomEnabled = true;
    global.fastBinom = multi(0, maxRange + 1, maxRange + 1);
    for (let i = 0; i <= maxRange; i++) {
      global.fastBinom[i][0] = 1;
      for (let j = 1; j <= i; j++) {
        global.fastBinom[i][j] = add(
          global.fastBinom[i - 1][j - 1],
          global.fastBinom[i - 1][j]
        );
      }
    }
  }
};

/**
 *
 * @param {number} n
 * @param {number} k
 * @returns nCk % mod
 */
const binom = (n, k) => {
  return k > n
    ? 0
    : global.fastBinomEnabled
    ? global.fastBinom[n][k]
    : mul(
        global.factorial[n],
        global.invFactorial[k],
        global.invFactorial[n - k]
      );
  // if (k > n) return 0;
  // if (global.fastBinomEnabled)
  //   return global.fastBinom[n][k];
  // return mul(
  //   global.factorial[n],
  //   global.invFactorial[k],
  //   global.invFactorial[n - k]
  // );
};

/**
 *
 * @param {number} x
 * @returns x! % mod
 */
const fact = x => {
  return global.factorial[x];
};

export { binomSetup, binom, fact };
