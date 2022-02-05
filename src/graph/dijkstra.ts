import { Graph } from './graph';
import { multi } from '../util/array';
import { PriorityQueue } from '../ds/priorityqueue';

/**
 *
 * @param graph
 * @param source The source node / the array of source nodes
 * @returns The parent array & the shortest path array
 */
const dijkstra = (graph: Graph, source: any) => {
  graph.reset();
  let pq = new PriorityQueue((a, b) => a.dist > b.dist);
  const INF = Number.MAX_SAFE_INTEGER;
  let d = multi(INF, graph.g.length);
  if (Array.isArray(source)) {
    for (let node of source) {
      pq.push({
        node,
        dist: 0,
      });
      d[node] = 0;
    }
  } else {
    pq.push({
      node: source,
      dist: 0,
    });
    d[source] = 0;
  }
  while (pq.size) {
    let u = pq.pop();
    if (d[u.node] !== u.dist) {
      continue;
    }
    for (let next of graph.g[u.node])
      if (d[next.to] > d[u.node] + next.prop.weight) {
        d[next.to] = d[u.node] + next.prop.weight;
        graph.par[next.to] = u.node;
        pq.push({
          node: next.to,
          dist: d[next.to],
        });
      }
  }
  return {
    parArray: graph.par,
    distArray: d,
  };
};

export { dijkstra };
