# Graph Algorithms for Technical Interviews - Full Course

## What is a graph?

> graph = nodes + edges

A graph is a collection of nodes and edges. So, with respect to nodes, you can visualize them as typically circles with data inside of them. And when we refer to edges, that would be just any connections between nodes.

A directed graph is when you have "arrowhead" along the edges in comparison to an undirected graph. The really the same structure, except undirected doesn't have any directionality to it.

A neighbor node is really any node that's accessible through an edge, of course, obeying the direction of the edge.

An adjacency list is probably the preferred way to represent graph information liek a hash map data structure.

## Depth First Traversal

DFS (Depth-first search) is technique used for traversing tree or graph. In this traversal first the deepest node is visited and then backtracks to it’s parent node if no sibling of that node exist.

## Breadth First Traversal

Is an algorithm for searching a tree data structure for a node that satisfies a given property. It starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes at the next depth level.

## Acyclic/Cycle graph

Acyclic means no cycles. **What is a cycle in a graph?** It would be some path through nodes, where I can end up where I want started, so, If I do a transversal on a cycle graph, I would get an infinite loop.

> edges list => adjacency list
