// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const tree = [root, 'end'];
  const widths = [0];

  while (tree.length > 1) {
    const node = tree.shift();

    if (node === 'end') {
      widths.push(0);
      tree.push('end');
    } else {
      tree.push(...node.children);
      widths[widths.length - 1]++;
    }
  }
  return widths;
}

module.exports = levelWidth;

/*
Solution: 1
function levelWidth(root) {
  const counters = [];
let arr = [root];
while (arr.length) {
  counters.push(arr.length);
  arr.forEach(node => arr.push(...node.children));
  arr = arr.slice(counters[counters.length - 1]);
}
return counters;
}
*********
Solution: 2
function levelWidth(root) {
  let nodeArray = [root]; 
  let widthArray = [nodeArray.length]; 
  let nodesLeft = nodeArray.length;
 
  while(nodeArray.length) {
    let currentNode = nodeArray.shift();
    nodeArray.push(...currentNode.children);
    nodesLeft--;
    if(!nodesLeft) {
      nodesLeft = nodeArray.length; 
      if(nodesLeft) widthArray.push(nodeArray.length);
    }
  }
 
  return widthArray;
}
Explanation:

The key is to take advantage of the order in which we put things in the nodeArray while traversing BF. For example:



//     0		Level 0
//   / |  \
// 1   2   3		Level 1
// |       |
// 4       5		Level 2
We know that these nodes will go into the array in the following order:

0 -> 1 2 3 -> 4 -> 5

The tricky part is knowing that 4 and 5 are in the same level. We do this by adding a counter to keep track of the number of nodes left to process in the nodeArray, and decrement it each time a node is processed and removed:

let nodesLeft = nodeArray.length;
Once nodesLeft has reached 0, we know the only nodes left in the nodeArray are all of the children of the current level. So, we push the length of the nodeArray to the widthArray, and move onto the next level. For example, after level 1 has finished processing, the only nodes left in the array are all children of level 1:

[4, 5]

Once the nodeArray is empty at the very end of all of our processing, we know none of the nodes on the current level have any children. This is the last level of our tree, and we can return our widthArray.

I believe this is a simpler solution than the stoppers but I would appreciate feedback.
*/
