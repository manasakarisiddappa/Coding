/*
Input Format: N = 3
Result: 
*****  
 ***
  *   
Input Format: N = 6
Result:     
***********
 *********
  *******
   ***** 
    ***    
     *

    
*/

let row = 6;

for (let i = row; i >= 0; i--) {
  let str = "";

  for (let j = 0; j < row - i; j++) {
    str += " ";
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    str += "*";
  }

  console.log(str);
}
