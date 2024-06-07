/*
Given an array arr[], find the maximum j – i such that arr[i] <= arr[j]
Given an array arr[] of N positive integers. The task is to find the maximum of j – i subjected to the constraint of arr[i] <= arr[j].

 */

function maxIndexDiff(a, n) {
  // your code here
  let left = new Array(n);
  let right = new Array(n);

  left[0] = a[0];
  for (let i = 1; i < n; i++) {
    left[i] = a[i] < left[i - 1] ? a[i] : left[i - 1];
  }

  right[n - 1] = a[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    right[i] = a[i] > right[i + 1] ? a[i] : right[i + 1];
  }

  let i = 0,
    j = 0,
    maxdif = -1;

  while (i < n && j < n) {
    if (left[i] <= right[j]) {
      maxdif = maxdif > j - i ? maxdif : j - i;
      j++;
    } else {
      i++;
    }
  }

  return maxdif;
}
