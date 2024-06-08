/**
 * Given a circular array of size n, 
 * find the maximum subarray sum of the non-empty subarray.
 * Input: arr[] = {8, -8, 9, -9, 10, -11, 12}
    Output: 22 
    Explanation: Subarray 12, 8, -8, 9, -9, 10 gives the maximum sum, that is 22.
 * 
 *  Follow the steps below to solve the given problem:

    We will calculate the total sum of the given array.
    We will declare the variable curr_max, max_so_far, curr_min, min_so_far as the first value of the array.
    Now we will use Kadane’s Algorithm to find the maximum subarray sum and minimum subarray sum.
    Check for all the values in the array:- 
    If min_so_far is equaled to sum, i.e. all values are negative, then we return max_so_far.
    Else, we will calculate the maximum value of max_so_far and (sum – min_so_far) and return it.
 * 
 * 
 *  * */

function circularSubarraySum(arr, N) {
  // code here
  if (N === 1) return arr[0];

  let sum = 0;
  for (let i = 0; i < N; i++) sum += arr[i];

  let cmax = arr[0],
    maxfar = arr[0],
    cmin = arr[0],
    minfar = arr[0];

  for (let i = 1; i < N; i++) {
    cmax = Math.max(cmax + arr[i], arr[i]);
    maxfar = Math.max(cmax, maxfar);

    cmin = Math.min(cmin + arr[i], arr[i]);
    minfar = Math.min(cmin, minfar);
  }

  if (minfar === sum) return maxfar;

  return Math.max(maxfar, sum - minfar);
}
