/***
 * Given a dictionary of distinct words and an M x N board where every 
 * cell has one character. Find all possible words from the dictionary 
 * that can be formed by a sequence of adjacent characters on the board. 
 * We can move to any of 8 adjacent characters

Note: While forming a word we can move to any of the 8 adjacent cells. 
A cell can be used only once in one word.
 * 
 * Input: 
N = 1
dictionary = {"CAT"}
R = 3, C = 3
board = {{C,A,P},{A,N,D},{T,I,E}}
Output:
CAT
Explanation: 
C A P
A N D
T I E
Words we got is denoted using same color.
 * 
 * 
 * 
 */

/**
 * @param {string[][]} board
 * @param {string[]} dictionary
 * @return {string[]}
 */

class Solution {
  dfs(board, j, k, word, m, n, idx) {
    if (j < 0 || k < 0 || j >= m || k >= n) return false;

    if (word[idx] !== board[j][k]) return false;

    if (idx === word.length - 1) return true;

    let tmp = board[j][k];
    board[j][k] = "*";

    let a1 = this.dfs(board, j - 1, k, word, m, n, idx + 1);
    let a2 = this.dfs(board, j - 1, k - 1, word, m, n, idx + 1);
    let a3 = this.dfs(board, j, k - 1, word, m, n, idx + 1);
    let a4 = this.dfs(board, j + 1, k - 1, word, m, n, idx + 1);
    let a5 = this.dfs(board, j + 1, k, word, m, n, idx + 1);
    let a6 = this.dfs(board, j + 1, k + 1, word, m, n, idx + 1);
    let a7 = this.dfs(board, j, k + 1, word, m, n, idx + 1);
    let a8 = this.dfs(board, j - 1, k + 1, word, m, n, idx + 1);

    board[j][k] = tmp;
    return a1 || a2 || a3 || a4 || a5 || a6 || a7 || a8;
  }

  wordBoggle(board, dictionary) {
    //code here

    let m = board.length;
    let n = board[0].length;
    let res = new Set();

    for (let i = 0; i < dictionary.length; i++) {
      let word = dictionary[i];

      for (let j = 0; j < m; j++) {
        for (let k = 0; k < n; k++) {
          if (this.dfs(board, j, k, word, m, n, 0)) {
            res.add(word);
          }
        }
      }
    }

    return [...res].sort();
  }
}
