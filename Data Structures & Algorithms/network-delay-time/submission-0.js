class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    push(item) {
        this.heap.push(item);
        this.up(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.down(0);

        return top;
    }

    up(i) {
        while (
            i > 0 &&
            this.heap[Math.floor((i - 1) / 2)][0] > this.heap[i][0]
        ) {
            let p = Math.floor((i - 1) / 2);
            [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
            i = p;
        }
    }

    down(i) {
        const n = this.heap.length;

        while (true) {
            let smallest = i;
            let l = 2 * i + 1;
            let r = 2 * i + 2;

            if (l < n && this.heap[l][0] < this.heap[smallest][0])
                smallest = l;

            if (r < n && this.heap[r][0] < this.heap[smallest][0])
                smallest = r;

            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] = [
                this.heap[smallest],
                this.heap[i],
            ];

            i = smallest;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}
        let adj = Array(n+1).fill().map(()=>[]);
        for(let [u,v,t] of times){
            adj[u].push([v,t])
        }
        let dist = Array(n+1).fill(Infinity);
        dist[k]=0;

        let pq = new PriorityQueue();
        pq.push([0,k]);

        while(!pq.isEmpty()){
            let [t , node] = pq.pop();
            if(t>dist[node]) continue;
            for(let [adjNode , wt] of adj[node]){
                if(wt+t < dist[adjNode]){
                    dist[adjNode] = wt+t;
                    pq.push([dist[adjNode] , adjNode])
                }
            }
        }

        let maxTime = Math.max(...dist.slice(1));

        if (maxTime===Infinity) return -1;
        return maxTime;

    }
}
