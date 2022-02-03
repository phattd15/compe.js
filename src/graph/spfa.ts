import { Graph } from './graph';
import { multiArray } from '../util/array';
import { Deque } from '../ds/deque';

/**
 *
 * @param graph
 * @param source The source node / the array of source nodes
 * @returns The parent array & the shortest path array
 */
const spfa = (graph: Graph, source: any) => {
  graph.reset();
  const INF = Number.MAX_SAFE_INTEGER;
  let d = multiArray(INF, graph.g.length);
  let inq = multiArray(false, graph.g.length);
  let q = new Deque();
  if (Array.isArray(source)) {
    for (let node of source) {
      q.push(node);
      inq[node] = true;
      d[node] = 0;
    }
  } else {
    q.push(source);
    inq[source] = true;
    d[source] = 0;
  }
  let u: number;
  while (q.size) {
    u = q.pop();
    inq[u] = false;
    for (let next of graph.g[u]) {
      if (d[next.to] > d[u] + next.prop.weight) {
        d[next.to] = d[u] + next.prop.weight;
        graph.par[next.to] = u;
        if (!inq[next.to]) {
          inq[next.to] = true;
          q.push(next.to);
        }
      }
    }
  }
  return {
    parArray: graph.par,
    distArray: d,
  };
};

export { spfa };
