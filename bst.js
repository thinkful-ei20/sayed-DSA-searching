class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left === null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        if (this.right === null) {
          this.right = new BinarySearchTree(key, value, this);
        } else {
          this.right.insert(key, value);
        }
      }
    }
  }

  find(key) {
    if (this.key === key) {
      return this.value;
    } else if (key < this.key && this.left) {
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      throw new Error('Key Error');
    }
  }

  remove(key) {
    if (this.key === key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        this._replaceWith(this.left);
      } else if (this.right) {
        this._replaceWith(this.right);
      } else {
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error('Key Error');
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this === this.parent.left) {
        this.parent.left = node;
      }
      else if (this === this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    }
    else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}

function inOrder(node) {
  if (node.left) {
    inOrder(node.left);
  }
  console.log(node.key);
  if (node.right) {
    inOrder(node.right);
  }
}

function preOrder(node) {
  console.log(node.key);
  if (node.left) {
    preOrder(node.left);
  }
  if (node.right) {
    preOrder(node.right);
  }
}

function postOrder(node) {
  if (node.left) {
    postOrder(node.left);
  }
  if (node.right) {
    postOrder(node.right);
  }
  console.log(node.key);
}

function maxProfit(arr) {
  let max = 0;
  let min = arr[0];
  let index = 0;
  for (let i = 0; i < arr.length-1; i++) {
    if (min > arr[i]) {
      min = arr[i];
      index = i;
    }
  }
  for (let i = index; i < arr.length-1; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max - min;
}

const traversal = new BinarySearchTree;
traversal.insert(25);
traversal.insert(15);
traversal.insert(50);
traversal.insert(10);
traversal.insert(24);
traversal.insert(35);
traversal.insert(70);
traversal.insert(4);
traversal.insert(12);
traversal.insert(18);
traversal.insert(31);
traversal.insert(44);
traversal.insert(66);
traversal.insert(90);
traversal.insert(22);
// inOrder(traversal);
// preOrder(traversal);
// postOrder(traversal);
console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]))