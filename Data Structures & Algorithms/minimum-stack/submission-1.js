class MinStack {
    constructor() {
        this.st = [];
        this.minSt = [];
    }
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.st.push(val);
        if(this.minSt.length===0){
            this.minSt.push(val)
        } else {
            this.minSt.push(Math.min(val , this.minSt[this.minSt.length-1]))
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.st.pop();
        this.minSt.pop();
    }

    /**
     * @return {number}
     */
    top() {
       return this.st[this.st.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minSt[this.minSt.length-1]
    }
}
