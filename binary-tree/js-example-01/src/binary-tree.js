class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
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
}

const demoTree = new BST();
demoTree.add(34);
demoTree.add(45);
demoTree.add(19);
demoTree.add(6);
demoTree.add(7);
demoTree.add(25);
console.log(demoTree.findMax());
