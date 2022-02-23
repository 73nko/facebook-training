// Add any extra import statements you may need here

// Add any helper functions you may need here

export function findMaxProduct(arr) {
  const response = [-1, -1];
  const heap = [arr[0], arr[1]];

  for (let i = 2; i < arr.length; i++) {
    if (heap.length === 2) {
      heap.push(arr[i]);
    } else if (arr[i] > heap[0]) {
      heap.shift();
      heap.push(arr[i]);
    }

    heap.sort((a, b) => a - b);
    response[i] = heap[0] * heap[1] * heap[2];
  }

  return response;
}
