/*
Input Format: N = 3
Result: 
1
01
101

Input Format: N = 6
Result:   
1
01
101
0101
10101
010101

*/

let row = 6;
for (let i = 0; i < row; i++) {
  let str = "";
  let start = i % 2 === 0 ? 1 : 0;

  for (let k = 0; k <= i; k++) {
    str += start;
    start = 1 - start;
  }

  console.log(str);
}
