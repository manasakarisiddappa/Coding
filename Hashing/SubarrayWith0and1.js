/**
 * Given an array containing 0s and 1s. Find the number of subarrays having equal number of 0s and 1s.
 * 
 * Input:
    n = 7
    A[] = {1,0,0,1,0,1,1}
    Output: 8
    Explanation: The index range for the 8 
    sub-arrays are: (0, 1), (2, 3), (0, 3), (3, 4), 
    (4, 5) ,(2, 5), (0, 5), (1, 6)
 */

class Solution {
  //Function to count subarrays with 1s and 0s.
  countSubarrWithEqualZeroAndOne(arr, n) {
    // code here
    let mp = new Map(),
      count = 0,
      sum = 0;

    for (let i = 0; i < n; i++) {
      if (arr[i] === 0) arr[i] = -1;

      sum += arr[i];

      if (sum === 0) count++;

      if (mp.has(sum)) count += mp.get(sum);

      if (mp.has(sum)) mp.set(sum, mp.get(sum) + 1);
      else mp.set(sum, 1);
    }

    return count;
  }
}
