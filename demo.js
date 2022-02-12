const { proc } = require('compe');
// DO NOT EDIT ABOVE THIS LINE //
function main() {
  // Read the 2 dimensions of the matrix
  let [n, m] = rnum(2);

  // Initialize the matrix with cell values of 0
  let a = array(0, n, m);

  // Initialize the sum and minimum value
  let sum = 0, minVal = Number.MAX_SAFE_INTEGER;

  // For each row
  for (let i = 0; i < n; i ++) {

    // Read the m elements of that row
    a[i] = rnum(m);
    
    // Update the sum for every elements
    for (let value of a[i]) {
      sum += value;
    }
    
    // Update the minimum value with the minimum of that row
    minVal = min(minVal, minElement(a[i]).res);
  }

  // Print the sum and minimum value, seperated by space
  print(sum, " ", minVal);
}
proc(main, __filename);
/* BELOW THIS LINE IS YOUR INPUT
3 4
1 2 3 4
4 -3 1 3
5 7 0 3
*/
