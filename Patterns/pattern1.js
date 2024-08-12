/**
 * Example 1:
    Input: N = 3
    Output: 
    * * *
    * * *
    * * *


  Example 2:
    Input: N = 6
    Output:
    * * * * * *
    * * * * * *
    * * * * * *
    * * * * * *
    * * * * * *
    * * * * * *

 */

let n = 6;

for (let i = 0; i < n; i++) {
  let str = "";
  for (let j = 0; j < n; j++) {
    str += "* ";
  }
  console.log(str);
}
