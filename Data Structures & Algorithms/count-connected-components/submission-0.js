class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adj = new Array(n).fill(null).map(()=>[]);
        for (let [u,v] of edges){
            adj[u].push(v);
            adj[v].push(u);
        }
        let count = 0;
        let visited = new Array(n).fill(0);
        function bfs(node){
            let q = [];
            q.push(node);
            visited[node] = 1;
            while(q.length){
                let n = q.shift();
                for (let adjNode of adj[n]){
                    if(!visited[adjNode]){
                        visited[adjNode] = 1;
                        q.push(adjNode)
                    }
                }
            }
        }
        for(let i = 0 ; i<n ; i++){
           if(!visited[i]){
            bfs(i);
            count++
           }
        }
        return count;
    }
}
