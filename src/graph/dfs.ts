import { Deque } from "../ds/deque";
import { Graph } from "./graph";

type preVisit = (current: number, graph: Graph) => void;

type postVisit = (current: number, graph: Graph) => void;

/**
 * Process the DFS on the graph
 * @param graph 
 * @param source Source node
 * @param preFn The function to process before propagating from the node
 * @param postFn The function to process after propagating from the node
 */
const dfs = (graph: Graph, source: number, preFn: preVisit, postFn: postVisit): void => {
  let stack = new Deque();
  stack.push(source);
  while (stack.size) {
    let u = stack.back;
    if (!graph.vis[u]) {
      graph.vis[u] = true;
      preFn(u, graph);
      for (let edge of graph.g[u]) if (!graph.vis[edge.to]) {
        graph.par[edge.to] = u;
        stack.push(edge.to);
      }
    } else {
      postFn(u, graph);
      stack.pop();
    }
  }
}

export {dfs};