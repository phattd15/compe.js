struct DSU {
  vector<int> p;
  DSU() { }
  void init(int _) {
    p.assign(_ + 1, -1);
  }
  DSU(int _) {
    init(_);
  }
  int par(int u) { 
    return p[u] < 0 ? u : (p[u] = par(p[u])); 
  }
  bool same(int u, int v) { 
    return par(u) == par(v); 
  }
  int size(int u) { 
    return - p[par(u)]; 
  }
  bool join(int u, int v) {
    if ((u = par(u)) == (v = par(v))) 
      return false;
    if (p[u] > p[v]) 
      swap(u, v);
    p[u] += p[v]; p[v] = u;
    return true;
  }
};