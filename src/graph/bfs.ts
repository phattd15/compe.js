import { Deque } from '../ds/deque';
import { Graph } from './graph';

type preVisit = (current: number, graph: Graph) => void;

/**
 * Process the BFS on the graph
 * @param graph
 * @param any Source node / array of source nodes
 * @param preFn The function to process before propagating from the node
 */
const bfs = (
  graph: Graph,
  source: any,
  preFn: preVisit,
): void => {
  let stack = new Deque();
  stack.push(source);
  if (Array.isArray(source)) {
    for (let node of source) {
      graph.vis[node] = true;
      stack.push(node);
    }
  } else {
    graph.vis[source] = true;
    stack.push(source);
  }
  while (stack.size) {
    let u = stack.pop();
    preFn(u, graph);
    for (let edge of graph.g[u])
      if (!graph.vis[edge.to]) {
        graph.par[edge.to] = u;
        stack.push(edge.to);
        graph.vis[edge.to] = true;
      }
  }
};

export { bfs };
