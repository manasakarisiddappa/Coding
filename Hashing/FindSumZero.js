/**
 * Given an array of integers. Find if there is a subarray (of size at-least one) with 0 sum. 
 * You just need to return true/false depending upon whether there is a subarray present with 0-sum or not. 
 * Printing will be taken care by the driver code.
 * Input:
    n = 5
    arr = {4,2,-3,1,6}
    Output: 
    Yes
    Explanation: 
    2, -3, 1 is the subarray with sum 0.
 * 
 * 
 * 
 * 
 * 
 */

class Solution {
  //Function to check whether there is a subarray present with 0-sum or not.
  subArrayExists(arr, n) {
    // code here
    let s = new Set();

    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += arr[i];

      if (sum == 0 || s.has(sum)) {
        return true;
      }
      s.add(sum);
    }

    return false;
  }
}
