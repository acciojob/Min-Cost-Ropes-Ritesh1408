const MinPriorityQueue = require('@datastructures-js/priority-queue').MinPriorityQueue;

function mincost(arr) {
    if (arr.length === 0) return 0;

    let pq = new MinPriorityQueue(); 
    let totalCost = 0;

    // Insert all elements into the min-heap
    arr.forEach(num => pq.enqueue(num));

    while (pq.size() > 1) {
        // Extract two smallest ropes
        let first = pq.dequeue().element;
        let second = pq.dequeue().element;
        
        let cost = first + second;
        totalCost += cost;

        pq.enqueue(cost);
    }

    return totalCost;
}

module.exports = mincost;
