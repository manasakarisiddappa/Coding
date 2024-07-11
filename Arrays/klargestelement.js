/*Given an array arr of n positive integers and an integer k, 
Your task is to return k largest elements in decreasing order. 
Input: arr[] = {12, 5, 787, 1, 23}, n = 5, k = 2
Output: 787 23
Explanation: 1st largest element in the array is 787 and second largest is 23.

*/
/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number[]}
 */

class Solution {
  findkthelement(arr, n, k) {
    let low = arr[0];
    let high = arr[0];

    for (let i = 1; i < n; i++) {
      low = Math.min(arr[i], low);
      high = Math.max(arr[i], high);
    }

    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      let count = 0;

      for (let i = 0; i < n; i++) if (arr[i] >= mid) count++;

      if (count >= k) low = mid + 1;
      else high = mid - 1;
    }

    return high;
  }

  kLargest(arr, n, k) {
    //code here

    let kthelement = this.findkthelement(arr, n, k);
    let res = [];

    for (let i = 0; i < n; i++) {
      if (arr[i] >= kthelement) {
        res.push(arr[i]);
      }
    }

    res = res.sort((a, b) => b - a);

    let ans = [];
    for (let i = 0; i < k; i++) {
      ans.push(res[i]);
    }

    return ans;
  }
}
