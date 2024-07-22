/*
Given K sorted linked lists of different sizes. The task is to merge them in such a way that after merging they 
will be a single sorted linked list.

Input:
K = 4
value = {{1,2,3},{4 5},{5 6},{7,8}}
Output: 1 2 3 4 5 5 6 7 8
Explanation:
The test case has 4 sorted linked 
list of size 3, 2, 2, 2
1st    list     1 -> 2-> 3
2nd   list      4->5
3rd    list      5->6
4th    list      7->8
The merged list will be
1->2->3->4->5->5->6->7->8.
Example 2:
*/


class Solution {
    //Function to merge K sorted linked list.
    
    compare(n1, n2){
        if(n1.data > n2.data) return 1;
        else if(n1.data < n2.data) return -1;
        else return 0;
    }
    
    heapify(heap){
        let ind = heap.length-1
        while(ind > 0){
            let ele = heap[ind]
            let pind = Math.floor((ind - 1)/2)
            let parent = heap[pind]
            if(this.compare(parent, ele) < 0)
                break
            heap[pind] = ele
            heap[ind] = parent
            ind = pind
        }
        
    }
    
    sinkdown(idx, heap){
        let l = idx*2+1, r = idx*2+2, min = idx;
        if(l < heap.length && this.compare(heap[l], heap[min]) < 0)
            min = l
            
        if(r < heap.length && this.compare(heap[r], heap[min]) < 0)
            min = r
            
        if(min !== idx)
        {
            let tmp = heap[min]
            heap[min] = heap[idx]
            heap[idx] = tmp
            this.sinkdown(min, heap)

        }
        
        
    }
    
    
    remove(heap) {
        let ele = heap[0], end = heap.pop()
        if(heap.length){
            heap[0] = end;
            this.sinkdown(0, heap)
        }
        
        return ele;
        
    }
    
    
    
    mergeKLists(arr, k)
    {
        let heap = [], node = new Node(0), tmp = node
        
        for(let i = 0; i < k; i++){
            heap.push(arr[i])
            this.heapify(heap)
        }
        
        while(heap.length){
            const cur = this.remove(heap)
            
            node.next = cur;
            node = node.next;
            
            if(cur.next){
                heap.push(cur.next)
                this.heapify(heap)
            }
            
            
        }
        
        
        return tmp.next
        
    }
}
