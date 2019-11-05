# Binary Trees / Binary Search Trees

- The node at the top of the tree is called the **root**
- The **root** has two children: left child, and a right child
- The nodes inside the tree are called **internal** nodes
- The nodes that have no children are called **leafs**
- Trees have a height, and is directly related to the number of edges/branches (lines that connect the nodes)
- Trees also have a depth, which is the amount of nodes deep (root = 0)
- Trees also have levels, with is root = 1 + each level of nodes

- When you have a depth first search, it is using one of the following methods:
  - Preorder --> your root is looked at first --> root, left, right
  - Inorder --> your root is looked at second --> left, root, right
  - Postorder --> your root is looked at last --> left, right, root
  - Check FR at 00:17

      100
    150  4
  20 10 8 15

  Preorder: **100**, 150, 120, 10 4, 8, 15
  Inorder: 20, 150, 10, **100**, 8, 4, 15
  Postorder: 20, 10, 150, 8, 15, 4, **100**

  Pseudocode

  function ____order
  (output here for preorder)
  if(root.left is not null)
    preorder()
  (output here if inorder)
  if(root.right is not null)
    preorder()
  (output here if postorder)

- The heights will be balanced if the heigh on the left does not vary from the height on the right as long as the difference is no more than one.
- A complete tree is always loaded from the left with no blanks in between the nodes. It will also be balanced.
- A perfect tree is a complete, balanced, and full tree.
- Values less than the root value must be a left child

Binanary Tree
Big O space --> height of what you traverse
Big O time --> o(n)

BST
Big O --> o(log n)

BST depth
BigO time --> o(n)
BigO space --> o(w) --> this is the width of the tree

