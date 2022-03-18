/*
Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.
For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.
In this example, assume nodes with the same value are the exact same node objects.
Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(nodes = []) {
    this.head = null;
    this.size = 0;
    for (const node of nodes) {
      this.add(node);
    }
  }

  add(element) {
    const node = new Node(element);

    let current;

    if (this.head == null) this.head = node;
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  *iterate() {
    let current = this.head;
    while (current.next) {
      yield current.value;
      current = current.next;
    }
    yield current.value;
  }

  giveAtIndex(index) {
    if (index >= this.size) throw Error("Too big index given");

    let i = 0;
    let current = this.head;

    while (i !== index) {
      current = current.next;
      i++;
    }

    return current.value;
  }
}

function findIntersectionNode(list1, list2) {
  let i = 0;

  for (const node of list1.iterate()) {
    if (node === list2.giveAtIndex(i)) {
      return node;
    }

    i++;
  }
}

const list1 = new LinkedList([3, 7, 8, 10]);
const list2 = new LinkedList([99, 1, 8, 10]);

console.log(findIntersectionNode(list1, list2));
