class treeNode {
    constructor(value, leftNode = null, rightNode = null) {
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(value) {
        const node = this.root;
        if (node === null) {
            this.root = new treeNode(value);
            return;
        }
        else {
            const searchTree = function (node) {
                if (value < node.value) {
                    if (node.leftNode === null) {
                        node.leftNode = new treeNode(value);
                        return;
                    } else if (node.leftNode !== null) {
                        return searchTree(node.leftNode);
                    }
                } else if (value > node.value) {
                    if (node.rightNode === null) {
                        node.rightNode = new treeNode(value);
                        return;
                    } else if (node.rightNode !== null) {
                        return searchTree(node.rightNode);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }

    }

    inOrder() {
        if (this.root == null) {
          return null;
        } else {
          var result = new Array();
          function InOrderTraversal(node) {       
            node.leftNode && InOrderTraversal(node.leftNode);
            result.push(node.value);
            node.rightNode && InOrderTraversal(node.rightNode);
          }
          InOrderTraversal(this.root);
          return result;
        };
      }

      preOrder() {
        if (this.root == null) {
          return null;
        } else {
          var result = new Array();
          function PreOrderTraversal(node) {
            result.push(node.value);
            node.leftNode && PreOrderTraversal(node.leftNode);
            node.rightNode && PreOrderTraversal(node.rightNode);
          };
          PreOrderTraversal(this.root);
          return result;
        };
      }
      postOrder() {
        if (this.root == null) {
          return null;
        } else {
          var result = [];
          function PostOrderTraversal(node) {
            node.leftNode && PostOrderTraversal(node.leftNode);
            node.rightNode && PostOrderTraversal(node.rightNode);
            result.push(node.value);
          };
          PostOrderTraversal(this.root);
          return result;
        }
      }

}


const bst = new BST();

bst.add(5);
bst.add(3);
bst.add(20);
bst.add(13);
bst.add(16);
bst.add(32);
bst.add(30);
bst.add(17);
bst.add(22);

function InorderButton()
{
    document.getElementById("Inorder").innerHTML=bst.inOrder();
}
function PreOrderButton()
{
    document.getElementById("preorder").innerHTML=bst.preOrder();
}

function postOrderButton()
{
    document.getElementById("treeContent").innerHTML=bst.postOrder();
}