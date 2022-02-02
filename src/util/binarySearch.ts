const defaultComparator = (a: any, b: any) => a < b;

/**
 * Performs lowerBound search on a sorted array range, returns the leftmost position that has the value >= searchValue
 * @param arr
 * @param searchValue 
 * @param leftIndex 
 * @param rightIndex 
 * @param comparator Takes in 2 numbers, returns true if the left one is strictly smaller than the right one. For example, the default comparator is (a, b) => a < b.
 * @returns 
 */
const lowerBound = (arr: any[], searchValue: number, leftIndex: number = 0, rightIndex: number = 0, comparator = defaultComparator) => {
  if (!rightIndex) {
    rightIndex = arr.length;
  }
  let mid;
  while (leftIndex < rightIndex) {
    mid = leftIndex + ((rightIndex - leftIndex) >>> 1);
    if (comparator(arr[mid], searchValue)) {
      leftIndex = mid + 1;
    } else {
      rightIndex = mid;
    }
  }
  return leftIndex;
}

/**
 * Performs upperBound search on a sorted array range, returns the leftmost position that has the value > searchValue
 * @param arr
 * @param searchValue 
 * @param leftIndex 
 * @param rightIndex 
 * @param comparator Takes in 2 numbers, returns true if the left one is strictly smaller than the right one. For example, the default comparator is (a, b) => a < b.
 * @returns 
 */
const upperBound = (arr: any[], searchValue: number, leftIndex: number = 0, rightIndex: number = 0, comparator = defaultComparator) => {
  if (!rightIndex) {
    rightIndex = arr.length;
  }
  let mid;
  while (leftIndex < rightIndex) {
    mid = leftIndex + ((rightIndex - leftIndex) >>> 1);
    if (comparator(searchValue, arr[mid])) {
      rightIndex = mid;
    } else {
      leftIndex = mid + 1;
    }
  }
  return leftIndex;
}

/**
 * Performs binary search on an index range of a function. Supposed that the function will return false then true based on the increasing index. Returns null if the whole range is false.
 * @param leftBound 
 * @param rightBound 
 * @param fn The function to be evaluate
 * @returns The first position where the function returns true
 */
const binarySearch = (leftBound: number, rightBound: number, fn: any): any => {
  let mid, answer = null;
  while (leftBound <= rightBound) {
    mid = (leftBound + rightBound) >>> 1;
    if (fn(mid)) {
      answer = mid, rightBound = mid - 1;
    } else {
      leftBound = mid + 1;
    }
  }
  return answer;
}
export {lowerBound, upperBound, binarySearch};