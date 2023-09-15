# Trees
## Binary Search Tree (BST)

* Binary Search Tree (BST) is a hierarchical data structure where each node has atmost two child nodes;
* A left child with a value less then or equal to the current node.
* A right child with a value greater then the curremt node. 
* It is used for the efficient searching, insertion and deletion operation when `balanced`, with an average time complexity of O(log n).
* Balancing is a crucial to prevent performance degradation of O(n). 


``` Js
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
```