/*
Input Format: N = 3
Result: 
1    1
12  21
123321

Input Format: N = 6
Result:   
1          1
12        21
12       321
1234    4321
12345  54321
123456654321
*/

// your code goes here

let row = 6;
let space = 2 * (row - 1);
for (let i = 1; i <= row; i++) {
  let str = "";

  for (let k = 1; k <= i; k++) {
    str += k;
  }

  for (let k = 1; k <= space; k++) {
    str += " ";
  }

  for (let k = i; k > 0; k--) {
    str += k;
  }
  space -= 2;

  console.log(str);
}
