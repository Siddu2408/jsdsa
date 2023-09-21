class MaxBinaryHeap{
    constructor(){
        this.values = [41, 39,33,18, 27, 12,33];
    }

    insert(){
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp(){
        let idx = this.values.length - 1;
        let element = this.values[idx];

        while(true){
            let parentIdx = Math.floor((idx - 1)/2);
            let parentElement = this.values[parentIdx];

            if(element <= parentElement) break;
            this.values[idx] = parentElement;
            this.values[parentIdx] = element
            idx = parentIdx;
        }
    }
}

let heap = new MaxBinaryHeap();
console.log(heap.insert(55));