import { multi } from '../util/array';

/**
 * Graph class, with:
 *    g as adjacency list
 *    vis as visited state
 *    par as parent list
 */
class Graph {
  g: any;
  vis: boolean[];
  par: number[];
  constructor(vertices: number) {
    this.g = multi([], vertices);
    this.vis = multi(false, vertices);
    this.par = multi(-1, vertices);
  }
  /**
   * Add one way edge
   * @param from
   * @param to
   * @param prop Object of properties of the edge, such as {weight}
   */
  addEdge(from: number, to: number, prop?: any) {
    this.g[from].push({ to, prop });
  }
  /**
   * Add two way edge
   * @param from
   * @param to
   * @param prop Object of properties of the edge, such as {weight}
   */
  addBiEdge(from: number, to: number, prop?: any) {
    this.addEdge(from, to, prop);
    this.addEdge(to, from, prop);
  }
  /**
   * Reset visit state and parent state of the graph
   */
  reset(): void {
    this.vis = multi(false, this.g.length);
    this.par = multi(-1, this.g.length);
  }
}

export { Graph };
