struct DSU {
  vector<int> par, sz, w;
  vector<array<int, 3>> op;
  bool flag;
  DSU() {}
  DSU(int n) {
    par.resize(n + 1);
    sz.resize(n + 1);
    w.resize(n + 1);
    flag = true;
    for (int i = 1; i <= n; i++) {
      par[i] = i; 
      sz[i] = 1; w[i] = 0;
    }
  }
  bool is_bipartite() {
    return flag;
  }
  pair<int, int> find(int u) {
    int ans = 0;
    while (par[u] != u)  {
      ans ^= w[u];
      u = par[u];
    }
    return make_pair(u, ans);
  }
  bool merge(int u, int v) {
    auto pu = find(u), pv = find(v);
    u = pu.first;
    v = pv.first;
    int last = flag;
    int z = pu.second ^ pv.second ^ 1;
    if (u == v) {
      if (z) {
        flag = false;
      }
      op.push_back({-1, -1, last});
      return false;
    }
    if (sz[u] > sz[v]) {
      swap(u, v);
    }
    op.push_back({u, w[u], last});
    par[u] = v;
    w[u] = z;
    sz[v] += sz[u];
    return true;
  }
  void undo() {
    assert(!op.empty());
    auto x = op.back();
    flag = x[2];
    int u = x[0];
    if (u != -1) {
      sz[par[u]] -= sz[u];
      par[u] = u;
      w[u] = x[1];
    }
    op.pop_back();
  }
};