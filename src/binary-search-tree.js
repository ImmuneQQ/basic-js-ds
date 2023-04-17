const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootItem = null;
  }

  root() {
    return this.rootItem;
  }

  add(data) {
    if (this.rootItem === null) {
      this.rootItem = new Node(data);
    } else {
      let current = this.root();
      while (true) {
        if (current.data > data) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = new Node(data);
            break;
          }
        } else if (current.data < data) {
          if (current.right) {
            current = current.right;
          } else {
            current.right = new Node(data);
            break;
          }
        } else {
          break;
        }
      }
    }
  }

  has(data) {
    let current = this.root();
    while (true) {
      if (current.data > data) {
        if (current.left) {
          current = current.left;
        } else {
          return false;
        }
      } else if (current.data < data) {
        if (current.right) {
          current = current.right;
        } else {
          return false;
        }
      } else {
        return true;
      }
    }
  }

  find(data) {
    let current = this.root();
    while (true) {
      if (current.data > data) {
        if (current.left) {
          current = current.left;
        } else {
          return null;
        }
      } else if (current.data < data) {
        if (current.right) {
          current = current.right;
        } else {
          return null;
        }
      } else {
        return current;
      }
    }
  }

  remove(data) {
    let current = this.root();
    while (true) {
      console.log(current);
      if (current.data > data) {
        if (current.left && current.left.data === data) {
          let newCurrent = current.left;
          console.log(current.left);
          if (newCurrent.left && newCurrent.right) {
            let minFromRight = newCurrent.right;
            while (minFromRight.left) {
              minFromRight = minFromRight.left;
            }
            newCurrent.data = minFromRight.data;
            if (minFromRight.right) {
              minFromRight = minFromRight.right;
            } else {
              minFromRight = null;
            }
          } else if (newCurrent.left) {
            newCurrent.data = newCurrent.left.data;
            newCurrent.left = newCurrent.left.left;
            newCurrent.right = newCurrent.left.right;
          } else if (newCurrent.right) {
            newCurrent.data = newCurrent.right.data;
            newCurrent.left = newCurrent.right.left;
            newCurrent.right = newCurrent.right.right;
          } else {
            current.left = null;
          }
          console.log(current.left);
          break;
        } else {
          if (current.left) {
            current = current.left;
          } else {
            break;
          }
        }
      } else if (current.data < data) {
        if (current.right && current.right.data === data) {
          let newCurrent = current.right;
          console.log(current.right);
          if (newCurrent.left && newCurrent.right) {
            let minFromRight = newCurrent.right;
            while (minFromRight.left) {
              minFromRight = minFromRight.left;
            }
            newCurrent.data = minFromRight.data;
            if (minFromRight.right) {
              minFromRight = minFromRight.right;
            } else {
              minFromRight = null;
            }
          } else if (newCurrent.left) {
            newCurrent.data = newCurrent.left.data;
            newCurrent.left = newCurrent.left.left;
            newCurrent.right = newCurrent.left.right;
          } else if (newCurrent.right) {
            newCurrent.data = newCurrent.right.data;
            newCurrent.left = newCurrent.right.left;
            newCurrent.right = newCurrent.right.right;
          } else {
            current.right = null;
          }
          console.log(current.right);
          break;
        } else {
          if (current.right) {
            current = current.right;
          } else {
            break;
          }
        }
      } else {
        console.log(current);
        if (current.left && current.right) {
          let minFromRight = current.right;
          while (minFromRight.left) {
            minFromRight = minFromRight.left;
          }
          current.data = minFromRight.data;
          if (minFromRight.right) {
            minFromRight = minFromRight.right;
          } else {
            minFromRight = null;
          }
        } else if (current.left) {
          current.data = current.left.data;
          current.left = current.left.left;
          current.right = current.left.right;
        } else if (current.right) {
          current.data = current.right.data;
          current.left = current.right.left;
          current.right = current.right.right;
        } else {
          current.left = null;
        }
        console.log(current);
        break;
      }
    }
  }

  min() {
    let current = this.root();

    while (true) {
      if (current.left) {
        current = current.left;
      } else {
        return current.data;
      }
    }
  }

  max() {
    let current = this.root();

    while (true) {
      if (current.right) {
        current = current.right;
      } else {
        return current.data;
      }
    }
  }
}

module.exports = {
  BinarySearchTree,
};
