class DSU {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.size = Array(n).fill(1);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(a, b) {
        let pa = this.find(a);
        let pb = this.find(b);

        if (pa === pb) return 1;

        if (this.size[pa] < this.size[pb]) {
            this.parent[pa] = pb;
            this.size[pb] += this.size[pa];
        } else {
            this.parent[pb] = pa;
            this.size[pa] += this.size[pb];
        }
    }
}

class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts) {
        const dsu = new DSU(accounts.length);
        let emailToAccount = new Map();
        for(let i=0 ; i<accounts.length ; i++){
            for(let j=1 ; j<accounts[i].length ; j++ ){
                const mail = accounts[i][j];
                
                if(emailToAccount.has(mail)){
                    const prevIdx  = emailToAccount.get(mail);
                    dsu.union(prevIdx , i);
                } else {
                    emailToAccount.set(mail , i);
                }
            }
        }
        let grp = new Map();
        for(let i=0 ; i<accounts.length ; i++){
            let root = dsu.find(i);
            if(!grp.has(root)){
                grp.set(root , []);
            }
            for(let j=1 ; j<accounts[i].length ; j++){
               
                grp.get(root).push(accounts[i][j])
            }
        }
        let result = [];
        for(let [root , arr] of grp){
            let unique = [...new Set(arr)];
            let name = accounts[root][0];
            result.push([name , ...unique]);
        }
        return result;
    }
}
