/*********
 * Given an array A of N elements. Find the majority element in the array. 
 * A majority element in an array A of size N is an element 
 * that appears strictly more than N/2 times in the array.
 * Input:
    N = 3 
    A[] = {1,2,3} 
    Output:
    -1
    Explanation:
    Since, each element in 
    {1,2,3} appears only once so there 
    is no majority element.
 * 
 */

class Solution {
  majorityElement(a, size) {
    //your code here
    let maj = 0,
      count = 1;

    for (let i = 1; i < a.length; i++) {
      if (a[maj] === a[i]) count++;
      else count--;

      if (!count) {
        maj = i;
        count = 1;
      }
    }

    count = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] === a[maj]) count += 1;
    }

    if (count > parseInt(a.length / 2)) return a[maj];
    else return -1;
  }
}
