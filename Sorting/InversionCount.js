/*
    Inversion count in Array using Merge Sort
    Inversion Count for an array indicates – how far (or close) 
    the array is from being sorted. If the array is already sorted, 
    then the inversion count is 0, but if the array is sorted in reverse order, 
    the inversion count is the maximum. 

Given an array arr[]. The task is to find the inversion count of arr[]. 
Where two elements arr[i] and arr[j] form an inversion if a[i] > a[j] and i < j.

 */

class Solution {
  // Function to count inversions in the array.

  merge(arr, l, m, r) {
    let left = [];
    for (let i = l; i < m + 1; i++) left.push(arr[i]);

    let right = [];
    for (let i = m + 1; i < r + 1; i++) right.push(arr[i]);

    let swap = 0,
      i = 0,
      j = 0,
      k = l;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k++] = left[i++];
      } else {
        arr[k++] = right[j++];
        swap += m + 1 - (i + l);
      }
    }

    while (i < left.length) arr[k++] = left[i++];

    while (j < right.length) arr[k++] = right[j++];
    return swap;
  }

  mergeAndCount(arr, l, r) {
    let count = 0;
    if (l < r) {
      let m = Math.floor((l + r) / 2);
      count += this.mergeAndCount(arr, l, m);
      count += this.mergeAndCount(arr, m + 1, r);
      count += this.merge(arr, l, m, r);
    }

    return count;
  }

  inversionCount(arr, N) {
    //your code here

    return this.mergeAndCount(arr, 0, N - 1);
  }
}
