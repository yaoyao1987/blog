/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 2) return n;
  let temp = [1, 2];
  for (let i = 2; i < n; i++) {
    temp[i] = temp[i - 1] + temp[i - 2];
  }
  return temp[n - 1];
};
