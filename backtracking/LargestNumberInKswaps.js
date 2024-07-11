/**
 * Given a number K and string str of digits denoting a positive integer, 
 * build the largest number possible by performing swap operations on 
 * the digits of str at most K times.
 * 
 * Input:
    K = 4
    str = "1234567"
    Output:
    7654321
    Explanation:
    Three swaps can make the
    input 1234567 to 7654321, swapping 1
    with 7, 2 with 6 and finally 3 with 5
 * 
 * 
 */

/**
 * @param {string} str
 * @param {number} k
 * @returns {string}
 */

class Solution {
  //Function to find the largest number after k swaps.
  findmax(str, k, max, cid) {
    if (k === 0) return;

    let mx = str[cid];

    for (let i = cid + 1; i < str.length; i++) {
      if (parseInt(str[i]) > parseInt(mx)) mx = str[i];
    }

    if (mx !== str[cid]) k = k - 1;

    for (let i = cid; i < str.length; i++) {
      if (str[i] === mx) {
        let tmp = str[cid];
        str[cid] = str[i];
        str[i] = tmp;

        let newstr = str.join("");

        if (BigInt(newstr) > BigInt(max[0])) {
          max[0] = newstr;
        }

        this.findmax(str, k, max, cid + 1);

        tmp = str[cid];
        str[cid] = str[i];
        str[i] = tmp;
      }
    }
  }

  findMaximumNum(str, k) {
    let max = [str];
    this.findmax(str.split(""), k, max, 0);
    return max[0];
  }
}
