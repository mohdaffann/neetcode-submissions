class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let v = numCourses;
        let edges = prerequisites;
        let adj = Array(v).fill(null).map(()=>[]);
        for(let [u,v] of edges){
            adj[u].push(v)
        }
        let path = Array(v).fill(0);
        let visited = Array(v).fill(0);

        function dfs(node){
            visited[node] = 1;
            path[node] = 1;
            for(let adjNode of adj[node]){
                if(!visited[adjNode]){
                    if(dfs(adjNode)===false){
                        return false;
                    }
                }
                else if(path[adjNode]){
                    return false;
                }
            }
            path[node] = 0;
            return true
        }
        for(let i=0 ; i<v ; i++){
            if(!visited[i]){
                if(dfs(i)===false){
                    return false;
                }
            }
        }
        return true
    }
}
