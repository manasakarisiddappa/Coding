/*
Input Format: N = 3
Result: 
1 2 3
1 2
1

Input Format: N = 6
Result:
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2 
1
*/

let n = 6;

for (let i = n; i > 0; i--) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += `${j} `;
  }
  console.log(str);
}