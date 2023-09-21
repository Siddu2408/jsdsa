# Binary Heap

## Insert into Binary Heap

<ol>
    <li>Push the value into values property on the heap</li>
    <li>Bubble up:</li>
    <ol>
        <li>
            Create a variable called index which is length of the values property - 1 </li>
        <li>
            Create a variable called parentIndex which is the floor of (index - 1)/2 
        </li>
        <li>
            Keep looping as long as the values of the element at the parentIndex is less then the values element at the child index 
        </li>
        <ol>
            <li>Swap the value of the values element at the parentIndex with the value of the element property at the child index</li>
            <li>
                Set the Index to be the parentIndex, start over.
            </li>
        </ol>
    </ol>
</ol>

### Insert code for Binary Heap.

``` JS 
code

```
