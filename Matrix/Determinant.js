/*
Given a square matrix of size n*n. The task is to find the determinant of this matrix.
Input:
n = 4
matrix[][] = {{1, 0, 2, -1},
              {3, 0, 0, 5},
              {2, 1, 4, -3},
              {1, 0, 5, 0}}
Output: 30
Explanation:
Determinant of the given matrix is 30.

*/


class Solution 
{
    //Function for finding determinant of matrix.
    
    getMinor(matrix, row, col){
        return matrix.filter((_,i) => i !== row).map(erow => erow.filter((_,j)=>j!==col))
    }
    
    determinantOfMatrix(matrix, n)
    {
        if(n === 1) return matrix[0][0]
        
        let det = 0;
        
        for(let i = 0; i < n; i++){
            let minor = this.getMinor(matrix, 0, i)

            let cofactor = matrix[0][i] * this.determinantOfMatrix(minor, n-1)
            
            let sign = (i%2 === 0)? 1 : -1;
            
            det += sign * cofactor
        }
        
        return det;
    }
}
