/**
 * Stickler the thief wants to loot money from a society having n houses 
 * in a single line. He is a weird person and follows a certain rule when 
 * looting the houses. According to the rule, he will never loot two 
 * consecutive houses. At the same time, he wants to maximize the amount 
 * he loots. The thief knows which house has what amount of money but 
 * is unable to come up with an optimal looting strategy. 
 * He asks for your help to find the maximum money he can get 
 * if he strictly follows the rule. ith house has a[i] amount 
 * of money present in it.
 * Input:
n = 5
a[] = {6,5,5,7,4}
Output: 
15
Explanation: 
Maximum amount he can get by looting 1st, 3rd and 5th house. Which is 6+5+4=15.
 */

class Solution {
  //Function to find the maximum money the thief can get.
  findMaxSum(arr, n) {
    // code here
    if (n == 1) return arr[0];
    if (n === 2) return Math.max(arr[0], arr[1]);

    let v1 = arr[0],
      v2 = Math.max(arr[0], arr[1]);

    for (let i = 2; i < n; i++) {
      let max = Math.max(arr[i] + v1, v2);
      v1 = v2;
      v2 = max;
    }

    return v2;
  }
}
