const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

function mincost(arr) {
    if (arr.length === 1) return 0; // If only one rope, no cost needed.

    let pq = new MinPriorityQueue(); // Min-Heap for storing rope lengths
    let totalCost = 0;

    // Insert all rope lengths into the min-heap
    arr.forEach(num => pq.enqueue(num));

    // Process ropes until only one remains
    while (pq.size() > 1) {
        let first = pq.dequeue().element;  // Extract the smallest rope
        let second = pq.dequeue().element; // Extract the second smallest rope

        let cost = first + second; // Merge ropes
        totalCost += cost; // Add cost to total

        pq.enqueue(cost); // Push merged rope back into the heap
    }

    return totalCost;
}

module.exports = mincost;
