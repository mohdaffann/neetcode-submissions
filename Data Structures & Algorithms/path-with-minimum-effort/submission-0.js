
class Solution {

    
    /**
     * @param {number[][]} heights
     * @return {number}
     */
    minimumEffortPath(heights) {
        class PriorityQueue {
     constructor() {
         this.heap = [];
     }

     parent(i) {
         return Math.floor((i - 1) / 2);
     }

     left(i) {
         return 2 * i + 1;
     }

     right(i) {
         return 2 * i + 2;
     }

     swap(i, j) {
         [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
     }

     push(value) {
         this.heap.push(value);
         this.bubbleUp();
     }

     bubbleUp() {
         let idx = this.heap.length - 1;

         while (
             idx > 0 &&
             this.heap[this.parent(idx)][0] > this.heap[idx][0]
         ) {
             this.swap(idx, this.parent(idx));
             idx = this.parent(idx);
         }
     }

     pop() {
         if (this.heap.length === 1) return this.heap.pop();

         const min = this.heap[0];
         this.heap[0] = this.heap.pop();
         this.bubbleDown();

         return min;
     }

     bubbleDown() {
         let idx = 0;

         while (true) {
             let smallest = idx;
             let left = this.left(idx);
             let right = this.right(idx);

             if (
                 left < this.heap.length &&
                 this.heap[left][0] < this.heap[smallest][0]
             ) {
                 smallest = left;
             }

             if (
                 right < this.heap.length &&
                 this.heap[right][0] < this.heap[smallest][0]
             ) {
                 smallest = right;
             }

             if (smallest === idx) break;

             this.swap(idx, smallest);
             idx = smallest;
         }
     }

     isEmpty() {
         return this.heap.length === 0;
     }
 }


        let rows = heights.length;
        let cols = heights[0].length;
        let dist  = Array(rows).fill().map(()=>Array(cols).fill(Infinity));
        dist[0][0] = 0;
        let dir = [[0,1] , [0,-1] , [1,0] , [-1,0]];
        let pq = new PriorityQueue();
        pq.push([0 , [0,0]]);

        while(!pq.isEmpty()){
            let [diff , [r,c]] = pq.pop();
            if(r===rows-1 && c===cols-1) return diff;
            for(let [dr,dc] of dir){
                let nr = dr+r;
                let nc = dc+c;
                if(nr>=0 && nc>=0 && nr<rows && nc<cols){
                    let maxEffort = Math.max(Math.abs(heights[r][c]-heights[nr][nc]) , diff);
                    if(maxEffort < dist[nr][nc]){
                        dist[nr][nc] = maxEffort;
                        pq.push([dist[nr][nc] , [nr,nc]]);
                    }
                }
            }
        }
    }
}
