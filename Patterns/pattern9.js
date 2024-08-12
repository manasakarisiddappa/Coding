/*
N= 5

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

*/

let row = 5;
for (let i = 0; i < row; i++) {
  let str = "";

  for (let j = 0; j < row - i; j++) {
    str += " ";
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    str += "*";
  }

  console.log(str);
}

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
