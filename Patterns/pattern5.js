/*
Input Format: N = 3
Result: 
* * *
* * 
*

Input Format: N = 6
Result:
* * * * * *
* * * * * 
* * * * 
* * * 
* * 
*
*/

let n = 6;

for (let i = n; i > 0; i--) {
  let str = "";
  for (let j = 0; j < i; j++) {
    str += `* `;
  }
  console.log(str);
}
