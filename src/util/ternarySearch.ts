/**
 * Performs ternary search on maxima / minima on a convex function
 * @param leftBound 
 * @param rightBound 
 * @param fn 
 * @param maxima True if search for maxima, false for minima
 * @param iter The number of iterations of division
 * @returns The maximum / minimum value
 */
const ternarySearch = (leftBound: number, rightBound: number, fn: any, maxima = false, iter = 200) => {
  let ll, rr;
  if (maxima) {
    while (iter --) {
      ll = leftBound + (rightBound - leftBound) / 3;
      rr = rightBound - (rightBound - leftBound) / 3;
      if (fn(ll) < fn(rr)) {
        leftBound = ll;
      } else {
        rightBound = rr;
      }
    }
  } else {
    while (iter --) {
      ll = leftBound + (rightBound - leftBound) / 3;
      rr = rightBound - (rightBound - leftBound) / 3;
      if (fn(rr) < fn(ll)) {
        leftBound = ll;
      } else {
        rightBound = rr;
      }
    }
  }
  return fn(ll);
}

/**
 * Find integral extremum of a function
 * @param leftBound 
 * @param rightBound 
 * @param fn 
 * @param maxima True if search for maxima, false for minima
 * @returns The maximum / minimum value
 */
const integralExtremumSearch = (leftBound: number, rightBound: number, fn: any, maxima = false) => {
  if (maxima) {
    let answer = fn(leftBound);
    leftBound ++;
    let mid, fnmid;
    while (leftBound <= rightBound) {
      mid = (leftBound + rightBound) >> 1;
      fnmid = fn(mid);
      if (fn(mid - 1) < fnmid) {
        answer = fnmid;
        leftBound = mid + 1;
      } else {
        rightBound = mid - 1;
      }
    }
    return answer;
  } else {
    let answer = fn(leftBound);
    leftBound ++;
    let mid, fnmid;
    while (leftBound <= rightBound) {
      mid = (leftBound + rightBound) >> 1;
      fnmid = fn(mid);
      if (fn(mid - 1) > fnmid) {
        answer = fnmid;
        leftBound = mid + 1;
      } else {
        rightBound = mid - 1;
      }
    }
    return answer;
  }
}

export {ternarySearch, integralExtremumSearch};