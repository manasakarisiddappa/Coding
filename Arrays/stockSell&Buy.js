/**
 * The cost of stock on each day is given in an array A[] of size N. 
 * Find all the segments of days on which you buy and sell the stock such that 
 * the sum of difference between sell and buy prices is maximized. 
 * Input: prices[] = {100, 180, 260, 310, 40, 535, 695}
    Output: 865
    Explanation: Buy the stock on day 0 and sell it on day 3 => 310 – 100 = 210
        Buy the stock on day 4 and sell it on day 6 => 695 – 40 = 655
        Maximum Profit  = 210 + 655 = 865
 * 
 * 
 * ******** */

class Solution {
  //Function to find the days of buying and selling stock for max profit.
  stockBuySell(A, n) {
    //your code here
    let profit = 0,
      res = [];

    for (let i = 1; i < n; i++) {
      if (A[i] > A[i - 1]) {
        profit += A[i] - A[i - 1];
        res.push([i - 1, i]);
      }
    }
    return res;
  }
}
