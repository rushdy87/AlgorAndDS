// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    // or we can use:
    // this.insertAt(data, 0);
  }

  size() {
    let node = this.head;
    let counter = 0;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
    // or we can use:
    // return this.getAt(0);
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
    // or we can use:
    // return this.getAt(this.saze() -1 );
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.getLast().next = node;
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
  }

  removeAt(index) {
    let node = this.getAt(index);
    if (!this.head || !node) {
      return;
    }

    if (index === 0) {
      this.head = node.next;
      return;
    }
    let previous = this.getAt(index - 1);
    previous.next = node.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    let previous = this.getAt(index - 1);
    if (previous) {
      previous.next = new Node(data, previous.next);
    } else {
      this.getLast().next = new Node(data);
    }
  }

  forEach(func) {
    let node = this.head;
    while (node) {
      func(node);
      node = node.next;
    }

    // let node = this.head;
    // let counter = 0;
    // while (node) {
    //   func(node, counter);
    //   node = node.next;
    //   counter++;
    // }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
