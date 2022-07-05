#include "bits/stdc++.h"
using namespace std;
template<class node> 
struct segment_tree : node {
  using node_t = typename node::node_t;
  const node_t identity = node::identity;
  using node::merge;
  using i32 = int32_t;
  node_t *t;
  i32 n, mleft, mright;
  #define md ((l + r) >> 1)
  void build(i32 i, i32 l, i32 r, vector<node_t> &z) {
    if (l == r) {
      t[i] = z[l];
      return;
    } else {
      build(i << 1, l, md, z);
      build(i << 1 | 1, md + 1, r, z);
      t[i] = merge(t[i << 1], t[i << 1 | 1]);
    }
  }
  void __update(i32 i, i32 l, i32 r, i32 p, node_t x) {
    if (l == r) {
      t[i] = x;
    } else {
      if (p <= md) __update(i << 1, l, md, p, x);
      else __update(i << 1 | 1, md + 1, r, p, x);
      t[i] = merge(t[i << 1], t[i << 1 | 1]);
    }
  }
  i32 _L, _R;
  node_t collector;
  void __query(i32 i, i32 l, i32 r) {
    if (l > _R || _L > r) return;
    if (_L <= l && r <= _R) collector = merge(collector, t[i]);
    else {
      __query(i << 1, l, md);
      __query(i << 1 | 1, md + 1, r);
    }
  } 
  void init(i32 _n, vector<node_t> z = vector<node_t>(), bool zero_indexed = false) {
    n = _n;
    t = new node_t[n << 2 | 1];
    fill(t, t + (n << 2 | 1), identity);
    mleft = (zero_indexed ? 0 : 1);
    mright = (zero_indexed ? n - 1 : n);
    if (z.size()) build(1, mleft, mright, z);
  }
  segment_tree() {}
  segment_tree(i32 _n, vector<node_t> z = vector<node_t>(), bool zero_indexed = false) {
    init(_n, z, zero_indexed);
  }
  void update(i32 p, node_t x) {
    __update(1, mleft, mright, p, x);
  }
  node_t query(i32 L, i32 R) {
    if (L > R) return identity;
    _L = L; _R = R;
    collector = identity;
    __query(1, mleft, mright);
    return collector;
  }
};
class node {
public:
  using node_t = long long;
  constexpr static node_t identity = 0;
  constexpr static node_t merge(const node_t lhs, const node_t rhs) {
    return lhs + rhs;
  }
};
struct edge {
  int32_t v;
};
template<typename edge>
struct HLD {
  int *p, *h, *heavy, *head, *pos, posmk = 0;
  int dfs(int u, vector<vector<edge>> const& g) {
    int sz = 1, msz = 0, csz;
    for (auto &e : g[u]) if (e.v != p[u]) {
      p[e.v] = u;
      h[e.v] = h[u] + 1;
      csz = dfs(e.v, g);
      sz += csz;
      if (csz > msz) msz = csz, heavy[u] = e.v;
    }
    return sz;
  }
  void hld(int u, int hd, vector<vector<edge>> const& g) {
    head[u] = hd;
    pos[u] = posmk ++;
    if (heavy[u] != -1) hld(heavy[u], hd, g);
    for (auto &e : g[u]) if (e.v != p[u] && e.v != heavy[u])
      hld(e.v, e.v, g);
  }
  void build(int n, vector<vector<edge>> const& g, int root = 0) {
    p = new int[n];
    heavy = new int[n];
    h = new int[n];
    head = new int[n];
    pos = new int[n];
    fill(heavy, heavy + n, -1);
    fill(head, head + n, -1);
    h[root] = 0, posmk = 0, p[root] = -1;
    dfs(root, g);
    hld(0, 0, g);
  }
  HLD(int n, vector<vector<edge>> const& g, int root = 0) {
    build(n, g, root);
  }
  template<typename node_t = typename node::node_t>
  node_t query(int x, int y, segment_tree<node> &t) {
    node_t result = node::identity;
    for (; head[x] != head[y]; y = p[head[y]]) {
      if (h[head[x]] > h[head[y]]) swap(x, y);
      result = node::merge(result, t.query(pos[head[y]], pos[y]));
    }
    if (h[x] > h[y]) swap(x, y);
    result = node::merge(result, t.query(pos[x], pos[y]));
    return result;
  }
};
void solution() {
  using i64 = long long;
  int n, q;
  cin >> n >> q;
  vector<vector<edge>> g(n);
  vector<i64> a(n);
  for (i64 &u : a) {
    cin >> u;
    u = abs(u);
  }
  for (int i = 0; i < n - 1; i ++) {
    int u, v;
    cin >> u >> v;
    u --;
    v --;
    g[u].push_back({v});
    g[v].push_back({u});
  }
  HLD hld(n, g);
  vector<i64> temp(n);
  for (int i = 0; i < n; i ++) temp[hld.pos[i]] = abs(a[i]);
  segment_tree<node> t(n, temp, true);
  while (q --) {
    int type;
    cin >> type;
    if (type == 1) {
      int u;
      i64 v;
      cin >> u >> v;
      u --;
      v = abs(v);
      t.update(hld.pos[u], v);
      a[u] = v;
    } else {
      int x, y;
      cin >> x >> y;
      x --, y --;
      cout << hld.query(x, y, t) * 2 - a[x] - a[y] << "\n"; 
    }
  }
}
signed main() {
  ios_base::sync_with_stdio(0); cin.tie(0); 
  int tc = 1;
#ifdef DEBUG
  freopen("input.txt", "r", stdin);
#endif
  // cin >> tc;
  for (int test = 1; test <= tc; test ++) {
    solution();
    cout << "\n";
  }
}