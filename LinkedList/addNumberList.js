/***
 * 
 * Given two numbers, num1 and num2, represented by linked lists of size n and m 
 * respectively. The task is to return a linked list that represents the sum of 
 * these two numbers.

For example, the number 190 will be represented by the linked list, 
1->9->0->null, similarly 25 by 2->5->null. Sum of these two numbers 
is 190 + 25 = 215, which will be represented by 2->1->5->null. 
You are required to return the head of the linked list 2->1->5->null.
Input:
n = 2
num1 = 45 (4->5->null)
m = 3
num2 = 345 (3->4->5->null)
Output: 
3->9->0->null  
Explanation: 
For the given two linked list (4 5) and (3 4 5), 
after adding the two linked list resultant linked list will be (3 9 0).
*/

class Solution {
  //Function to add two numbers represented by linked list.

  reverseList(list) {
    let prev = null,
      cur = list,
      next = null;
    while (cur !== null) {
      next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }

    return prev;
  }

  addTwoLists(num1, num2) {
    //your code here
    num1 = this.reverseList(num1);
    num2 = this.reverseList(num2);

    let carry = 0,
      sum = 0,
      res = null;
    while (num1 || num2 || carry) {
      let s = carry;
      if (num1) {
        s += num1.data;
        num1 = num1.next;
      }

      if (num2) {
        s += num2.data;
        num2 = num2.next;
      }

      carry = Math.floor(s / 10);
      s = s % 10;

      let newnode = new Node(s);
      newnode.next = res;
      res = newnode;
    }

    while (res.data === 0 && res.next) {
      res = res.next;
    }

    return res;
  }
}
