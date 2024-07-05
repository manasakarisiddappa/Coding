/****
 * Given that there are N books and M students. Also given are the number of pages in each book in ascending order. 
 * The task is to assign books in such a way that the maximum number of pages assigned to a student is minimum,
 * with the condition that every student is assigned to read some consecutive books. Print that minimum number of pages.
 * 
 * Another way to solve this problem is to use Binary Search, based on this idea:

Case 1: When no valid answer exists.

If the number of students is greater than the number of books (i.e, M > N), In this case at least 1 
student will be left to which no book has been assigned.
Case 2: When a valid answer exists.

The maximum possible answer could be when there is only one student. So, all the book will be assigned to
 him and the result would be the sum of pages of all the books.
The minimum possible answer could be when number of student is equal to the number of book (i.e, M == N) , 
In this case all the students will get at most one book. So, the result would be the maximum number of pages 
among them (i.e, maximum(pages[])).
Hence, we can apply binary search in this given range and each time we can consider the mid value as 
the maximum limit of pages one can get. And check for the limit if answer is valid then update the limit accordingly.


Input: N = 4, pages[] = {12, 34, 67, 90}, M = 2
Output: 113
Explanation: There are 2 students. Books can be distributed in following combinations:

{12} and {34, 67, 90} -> Max number of pages is allocated to student 2 with 34 + 67 + 90 = 191 pages
{12, 34} and {67, 90} -> Max number of pages is allocated to student 2 with 67 + 90 = 157
{12, 34, 67} and {90} -> Max number of pages is allocated to student 1 with 12 + 34 + 67 = 113 pages
The third combination has the minimum pages assigned to a student = 113.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

class Solution {
  //Function to find minimum number of pages.
  ifPossible(minpage, mid, a, m) {
    let pages = a[0],
      st = 1;

    for (let i = 1; i < a.length; i++) {
      if (pages + a[i] <= mid) {
        pages += a[i];
      } else {
        st++;
        pages = a[i];
        if (st > m) return false;
      }
    }
    return true;
  }

  findPages(a, n, m) {
    //your code here
    if (n < m) return -1;

    let maxpage = a[0],
      minpage = a[0];
    for (let i = 1; i < n; i++) {
      maxpage += a[i];
      minpage = Math.max(a[i], minpage);
    }

    let res = Number.MAX_VALUE;

    while (minpage <= maxpage) {
      let mid = Math.floor((minpage + maxpage) / 2);

      if (this.ifPossible(minpage, mid, a, m)) {
        res = Math.min(res, mid);
        maxpage = mid - 1;
      } else {
        minpage = mid + 1;
      }
    }

    return res;
  }
}
