class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

export default class BST {
  constructor(root = null) {
    this.root = root;
  }

  add(data) {
    // if no root node, create node and set it to root
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      // if root exists, recursively search tree to determine where to create new node
      const searchTree = (node) => {
        if (data < node.data) {
          // start looking left...
          if (node.left === null) {
            node.left = new Node(data);
            return;
            // work the way down the tree (until no left node found)
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          // start looking right...
          if (node.right === null) {
            node.right = new Node(data);
            return;
            // work the way down the tree (until no right node found)
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  // will be at left-most position in the tree
  findMin() {
    let currentNode = this.root;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  // will be at right-most position in the tree
  findMax() {
    let currentNode = this.root;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    // while there is a node
    while (current) {
      if (current.data === data) {
        return true;
      }
      // traverse to the left
      if (data < current.data) {
        current = current.left;
        // traverse to the right
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = (node, data) => {
      // check for empty tree
      if (node === null) {
        return null;
      }
      if (node.data === data) {
        // node has no children
        if (node.left === null && node.right === null) {
          return null;
        }
        // node has no left children
        if (node.left === null) {
          return node.right;
        }
        // node has no right children
        if (node.right === null) {
          return node.left;
        }
        // node has two children
        // first set tempNode to the (to be deleted) node's right child
        let tempNode = node.right;
        // then find the left most node from there and set it to tempNode
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        // swap the node's data value (replacing what was originally there with the value from the left-most node)
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    // start at the root
    this.root = removeNode(this.root, data);
  }

  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }
  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  // Depth-First
  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      let result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }
  // Depth-First
  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      let result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }
  }
  // Depth-First
  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      let result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    }
  }
  // Breath-First
  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root !== null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left !== null) {
          Q.push(node.left);
        }
        if (node.right !== null) {
          Q.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }
}
