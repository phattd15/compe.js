import {Graph} from "./graph";
import { DisjointSetUnion } from "../ds/dsu";

const minimumSpanningTree = (graph: Graph) => {
  let mst = 0;
  let edges = [];
  let mstEdges = [];
  for (let i = 0; i < graph.g.length; i ++) {
    for (let edge of graph.g[i]) {
      if (i < edge.to) {
        edges.push({
          from: i,
          to: edge.to,
          weight: edge.prop.weight
        });
      }
    }
  }
  let dsu = new DisjointSetUnion(graph.g.length);
  edges.sort((edgeA, edgeB) => edgeA.weight - edgeB.weight);
  for (let edge of edges) {
    if (dsu.join(edge.from, edge. to)) {
      mst += edge.weight;
      mstEdges.push(edge);
    }
  }
  return {
    mst,
    mstEdges
  };
}

export {minimumSpanningTree};
