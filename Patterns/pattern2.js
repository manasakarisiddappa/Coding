/*
Input Format: N = 3
Result: 
* 
* * 
* * *

Input Format: N = 6
Result:
* 
* * 
* * *
* * * *
* * * * *
* * * * * *

*/

let n = 4;

for (let i = 0; i < n; i++) {
  let str = "";
  for (let j = 0; j <= i; j++) {
    str += "* ";
  }
  console.log(str);
}
