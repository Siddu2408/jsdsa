# Tree Traversal

## Two Ways 
<ol>
  <li>BSF - Breadth first search  </li>
  <li>DSF - Depth first search
    <ol>
      <li>Pre-Order DFS</li>
      <li>Post-Order DSF</li>
      <li>In-Order DSF</li>
    </ol>
  </li>
</ol> 

### BFS Iteratively

<ol>
    <li>Create a queue (this can be a array) and a variable to store the values of node visited</li>
    <li>
      Place the root node in the queue
    </li>
    <li>Loop as long as there is anything in the queue</li>
    <ol>
        <li>
            Dequeue a node from the queue ans push the valuesof the node into the variable that stores the nodes
        </li>
        <li>
            if there is a left property on the node dequeued - add it to the queue
        </li>
        <li>
            if there is a right property on the node dequeued - add it to the queue
        </li>
    </ol>
    <li>Return the variables that stores the values</li>
</ol>

``` JS
 BFS(){
        let node = this.root,
        queue = [],
        data = [];

        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

```

### PRE-ORDER DFS (Recursively)

<ol>
    <li>
        Create a variable to store the values of node visited
    </li>
    <li>Store the root of the BST in a variable called current</li>
    <li>Write a helper function which accepts a node</li>
    <ol>
        <li>
            Push the value of node to the variable that stores the values
        </li>
        <li>If the node has left property, call the helper function with the left property on the node</li>
        <li>
        If the node has a right property, call the helper function with rihgt property on the node
        </li>
    </ol>
    <li>Invoke the helper function with the current variable</li>
    <li>Return the array of values</li>
</ol>

### POST-ORDER DFS (Recursively)

<ol>
    <li>
        Create a variable to store the values of node visited
    </li>
    <li>Store the root of the BST in a variable called current</li>
    <li>Write a helper function which accepts a node</li>
    <ol>
        <li>If the node has left property, call the helper function with the left property on the node</li>
        <li>
        If the node has a right property, call the helper function with rihgt property on the node
        </li>
         <li>
            **Push the value of node to the variable that stores the values**
        </li>
    </ol>
    <li>Invoke the helper function with the current variable</li>
    <li>Return the array of values</li>
</ol>