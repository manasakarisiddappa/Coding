/***
 * Given an unsorted array of integers and a sum. 
 * The task is to count the number of subarray which adds to the given sum
 * Input:
    n = 5
    arr[] = {10,2,-2,-20,10}
    sum = -10
    Output: 3
    Explanation: Subarrays with sum -10 are: [10, 2, -2, -20], [2, -2, -20, 10] and [-20, 10].
 * 
 */

class Solution {
  //Function to count the number of subarrays which adds to the given sum.
  subArraySum(arr, n, sum) {
    // code here
    let mp = new Map(),
      csum = 0,
      count = 0;

    for (let i = 0; i < n; i++) {
      csum += arr[i];

      if (csum === sum) count++;

      if (mp.get(csum - sum)) count += mp.get(csum - sum);

      if (!mp.get(csum)) mp.set(csum, 1);
      else mp.set(csum, mp.get(csum) + 1);
    }
    return count;
  }
}
