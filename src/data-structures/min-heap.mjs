export default class MinHeap {
  constructor(heapSize) {
    this.heapSize = heapSize;
    this.minHeap = Array.from({ length: heapSize + 1 });
    this.realSize = 0;
  }

  add(element) {
    this.realSize += 1;
    if (this.realSize > this.heapSize) {
      this.realSize -= 1;
    }

    this.minHeap[this.realSize] = element;

    let index = this.realSize;
    let parent = Math.floor(index / 2);

    while (this.minHeap[index] < this.minHeap[parent] && index > 1) {
      const temp = this.minHeap[index];
      this.minHeap[index] = this.minHeap[parent];
      this.minHeap[parent] = temp;

      index = parent;
      parent = Math.floor(index / 2);
    }
  }

  pop() {
    if (this.realSize < 1) {
      return -1;
    }

    const removeElement = this.minHeap[1];

    this.minHeap[1] = this.minHeap[this.realSize];
    this.realSize -= 1;
    let index = 1;

    while (index <= Math.floor(this.realSize / 2)) {
      const left = index * 2;
      const right = index * 2 + 1;

      if (
        this.minHeap[index] > this.minHeap[left] ||
        this.minHeap[index] > this.minHeap[right]
      ) {
        const temp = this.minHeap[index];
        if (this.minHeap[left] < this.minHeap[right]) {
          this.minHeap[index] = this.minHeap[left];
          this.minHeap[left] = temp;
          index = left;
        } else {
          this.minHeap[index] = this.minHeap[right];
          this.minHeap[right] = temp;
          index = right;
        }
      } else break;
    }

    return removeElement;
  }

  peek() {
    return this.minHeap[1];
  }

  size() {
    return this.realSize;
  }
}
const minHeap = new MinHeap(5);
minHeap.add(3);
minHeap.add(1);
minHeap.add(2);
console.log(minHeap);
console.log(minHeap.peek());
console.log(minHeap.pop());
console.log(minHeap.pop());
console.log(minHeap.pop());
minHeap.add(4);
minHeap.add(5);
console.log(minHeap);
