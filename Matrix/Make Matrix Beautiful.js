/*
A beautiful matrix is a matrix in which the sum of elements in each row and column is equal. 
Given a square matrix of size NxN. Find the minimum number of operation(s) that are required to make the matrix beautiful. 
In one operation you can increment the value of any one cell by 1.
Input:
N = 2
matrix[][] = {{1, 2},
              {3, 4}}
Output: 
4
Explanation:
Updated matrix:
4 3
3 4
1. Increment value of cell(0, 0) by 3
2. Increment value of cell(0, 1) by 1
Hence total 4 operation are required.
*/

class Solution
{
    //Function to find the minimum number of operations required to make all the elements of the matrix equal.
    findMinOperation(matrix, n)
    {
        let row = new Array(n).fill(0), res = 0, col = new Array(n).fill(0);
        
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                row[i] += matrix[i][j]
                col[j] += matrix[i][j]
            }
        }
        
        let max = 0;
        
        for(let i = 0; i < n; i++){
           max =  Math.max(row[i], max)
           max = Math.max(col[i], max)
        }
        
        let i = 0, j = 0;
        while(i < n && j < n){
            let dif = Math.min(max-row[i], max-col[j])
            
            matrix[i][j] += dif
            row[i] += dif
            col[j] += dif
            
            if(row[i] === max)
                i++;
            
            if(col[j] === max)
                j++;
                
            res += dif;
            
        }
        
        return res;

        
    }
}
