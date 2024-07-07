/****
 * Find a triplet in an array whose sum is closest to a given number
 * Given an array arr[] of N integers and an integer X, the task is to find three
 * integers in arr[] such that the sum is closest to X.
 *
 * Input: arr[] = {-1, 2, 1, -4}, X = 1
  Output: 2
  Explanation:
  Sums of triplets:
  (-1) + 2 + 1 = 2
  (-1) + 2 + (-4) = -3
  2 + 1 + (-4) = -1
  2 is closest to 1.
 *
 */

//User function Template for javascript

/**
 * @param {Number[]} arr
 * @param {Number} target
 * @returns {Number}
 */

class Solution {
  threeSumClosest(arr, target) {
    //code here
    arr.sort((a, b) => a - b);

    let closesum = 1000000000;
    for (let i = 0; i < arr.length - 2; i++) {
      let left = i + 1,
        right = arr.length - 1;

      while (left < right) {
        let sum = arr[i] + arr[left] + arr[right];

        if (Math.abs(target - sum) <= Math.abs(target - closesum)) {
          if (Math.abs(target - sum) === Math.abs(target - closesum)) {
            closesum = Math.max(sum, closesum);
          } else closesum = sum;
        }

        if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }

    return closesum;
  }
}
