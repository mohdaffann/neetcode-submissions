class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        let adj = Array(n).fill().map(()=>[]);
        for(let [u,v,dist] of flights){
            adj[u].push([v,dist])
        }
        let dist = new Array(n).fill(Infinity);
        dist[src] = 0;
        let queue = [];
        queue.push([0 , [src,0]]);
        // in order of = [stops , [node , cost/dist]]

        while(queue.length){
            let [stops , [node , costSoFar]] = queue.shift();
            if(stops > k) continue;
            for(let [adjNode , wt] of adj[node]){
                if(wt+costSoFar < dist[adjNode] && stops<=k){
                    dist[adjNode] = wt+costSoFar;
                    queue.push([stops+1 , [adjNode , dist[adjNode]]])
                }
            }
        }
        if(dist[dst]===Infinity) return -1;
        return dist[dst];

    }
}
