class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let v = numCourses;
        let edges = prerequisites;
        let adj = Array(v).fill(null).map(()=>[]);
        for (let [u,v] of edges){
            adj[v].push(u)
        }
        let idg = Array(v).fill(0);
        for(let i=0 ; i<v ; i++){
            for(let adjNodes of adj[i]){
                idg[adjNodes]++;
            }
        }
        let q = [];
        for(let i=0 ; i<v ; i++){
            if(idg[i]===0){
                q.push(i)
            }
        }
        let topo = []
        while(q.length){
            let node = q.shift();
            topo.push(node);

            for(let adjNode of adj[node]){
                idg[adjNode]--;
                if(idg[adjNode]===0){
                    q.push(adjNode)
                }
            }
        }
        if(topo.length===v){
            return topo;
        } else {
            return [];
        }
    }
}
