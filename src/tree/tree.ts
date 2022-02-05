import {Graph} from "../graph/graph";
import {dfs} from "../graph/dfs";

class Tree extends Graph {
  root: number = 1;
  childCount: number[];
  distance: number[];
  distRoot: number[];
  constructor(vertices: number, root: number) {
    super(vertices);
    this.root = root;
    this.childCount = Array(vertices + 1).fill(1);
    this.distRoot = Array(vertices + 1).fill(0);
    this.distance = Array(vertices + 1).fill(0);
  }  
  public setupDist() {
    dfs(this, this.root, (u: number, g: Graph) => {
      for (let next of g.g[u]) if (next.to != g.par[u]) {
        if (next.prop) {
          this.distance[next.to] = this.distance[u] + next.prop.weight;
        }
        this.distRoot[next.to] = this.distRoot[u] + 1;
      }
    }, (u: number, g: Graph) => {
      for (let next of g.g[u]) if (next.to != g.par[u]) {
        this.childCount[u] += this.childCount[next.to];
      }
    });
  }
  private parentLift: any;
  private log: any;
  public setupLCA() {
    this.setupDist();
    let logFactor = 31 - Math.clz32(this.g.length);
    this.log = logFactor;
    this.parentLift = Array(logFactor + 1);
    this.parentLift[0] = this.par;
    for (let level = 1; level <= logFactor; level ++) {
      this.parentLift[level] = Array(this.g.length).fill(-1);
      for (let i = 0; i < this.g.length; i ++) {
        if (this.parentLift[level - 1][i] != -1) {
          this.parentLift[level][i] = this.parentLift[level - 1][this.parentLift[level - 1][i]];
        }
      }
    }
    this.distRoot = this.distRoot;
  }
  public getLCA(u: number, v: number) {
    if (this.distRoot[u] < this.distRoot[v])
      [u, v] = [v, u];
    for (let i = this.log; i >= 0; i --) {
      if (this.distRoot[u] - (1 << i) >= this.distRoot[v]) {
        u = this.parentLift[i][u];
      }
    }
    if (u === v)
      return u;
    for (let i = this.log; i >= 0; i --) {
      if (this.parentLift[i][u] != this.parentLift[i][v]) {
        u = this.parentLift[i][u];
        v = this.parentLift[i][v];
      }
    }
    return this.parentLift[0][u];
  }
}

export {Tree};