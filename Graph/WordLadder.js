/**
 * Given two distinct words startWord and targetWord, and a list denoting wordList of unique words of equal lengths. Find the length of the shortest transformation sequence from startWord to targetWord.
    Keep the following conditions in mind:

    A word can only consist of lowercase characters.
    Only one letter can be changed in each transformation.
    Each transformed word must exist in the wordList including the targetWord.
    startWord may or may not be part of the wordList

    Input:
    wordList = {"des","der","dfr","dgt","dfs"}
    startWord = "der", targetWord= "dfs",
    Output:
    3
    Explanation:
    The length of the smallest transformation
    sequence from "der" to "dfs" is 3
    i,e "der" -> "dfr" -> "dfs".
 * 
 * 
 * 
 * 
 * ** */

class Solution {
  wordLadderLength(startWord, targetWord, wordList, N) {
    // code here

    let map = new Map();

    for (let i = 0; i < startWord.length; i++) {
      let str = startWord.slice(0, i) + "*" + startWord.slice(i + 1);
      if (!map.get(str)) {
        map.set(str, [startWord]);
      } else {
        let arr = map.get(str);
        arr.push(start);
        map.set(str, arr);
      }
    }

    for (let word of wordList) {
      for (let i = 0; i < word.length; i++) {
        let str = word.slice(0, i) + "*" + word.slice(i + 1);
        if (!map.get(str)) {
          map.set(str, [word]);
        } else {
          let arr = map.get(str);
          arr.push(word);
          map.set(str, arr);
        }
      }
    }

    let q = [[startWord, 1]],
      vis = new Map();
    vis.set(startWord, 1);

    while (q.length) {
      let ele = q.shift();

      let word = ele[0],
        dist = ele[1];

      if (word === targetWord) return dist;

      for (let i = 0; i < word.length; i++) {
        let str = word.slice(0, i) + "*" + word.slice(i + 1);
        let arr = map.get(str);
        for (let j = 0; j < arr.length; j++) {
          if (!vis.get(arr[j])) {
            vis.set(arr[j], 1);
            q.push([arr[j], dist + 1]);
          }
        }
      }
    }

    return 0;
  }
}
