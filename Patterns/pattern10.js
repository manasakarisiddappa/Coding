/*
Input Format: N = 3
Result: 
  *  
  **
  ***  
  **
  *   
Input Format: N = 6
Result:   
     *
     **
     *** 
     ****
     *****
     ******  
     *****
     ****
     ***    
     **
     *

*/

// your code goes here

let row = 3;
for (let i = 0; i < row; i++) {
  let str = "";

  for (let k = 0; k <= i; k++) {
    str += "*";
  }

  console.log(str);
}

for (let i = row - 1; i > 0; i--) {
  let str = "";

  for (let k = 0; k < i; k++) {
    str += "*";
  }

  console.log(str);
}
