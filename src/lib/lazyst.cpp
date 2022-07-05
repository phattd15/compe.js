#include "bits/stdc++.h"
using namespace std;
template<class node> 
struct lazy_segment_tree : node {
  using node_t = typename node::node_t;
  const node_t identity = node::identity;
  using lazy_t = typename node::lazy_t;
  const lazy_t lazy_identity = node::lazy_identity;
  using node::merge;
  using node::modify;
  using node::push;
  using i32 = int32_t;
  node_t *t;
  lazy_t *lz;
  i32 n, mleft, mright;
  #define md ((l + r) >> 1)
  void build(i32 i, i32 l, i32 r, vector<node_t> &z) {
    lz[i] = lazy_identity;
    if (l == r) {
      t[i] = z[l];
      return;
    } else {
      build(i << 1, l, md, z);
      build(i << 1 | 1, md + 1, r, z);
      t[i] = merge(t[i << 1], t[i << 1 | 1]);
    }
  }
  void lazy(i32 i, i32 l, i32 r) {
    if (lz[i] == lazy_identity) return;
    modify(t[i], lz[i]);
    if (l != r) {
      push(lz[i << 1], lz[i]);
      push(lz[i << 1 | 1], lz[i]);
    }
    lz[i] = lazy_identity;
  }
  i32 _L, _R;
  lazy_t _x;
  void __update(i32 i, i32 l, i32 r) {
    lazy(i, l, r);
    if (l > _R || _L > r) return;
    if (_L <= l && r <= _R) {
      push(lz[i], _x);
      lazy(i, l, r);
      return;
    }
    __update(i << 1, l, md);
    __update(i << 1 | 1, md + 1, r);
    t[i] = merge(t[i << 1], t[i << 1 | 1]);
  }
  node_t collector;
  void __query(i32 i, i32 l, i32 r) {
    if (l > _R || _L > r) return;
    lazy(i, l, r);
    if (_L <= l && r <= _R) collector = merge(collector, t[i]);
    else {
      __query(i << 1, l, md);
      __query(i << 1 | 1, md + 1, r);
    }
  } 
  void init(i32 _n, vector<node_t> z = vector<node_t>(0), bool zero_indexed = false) {
    n = _n;
    int max_memo = n * 4 + 5;
    t = new node_t[max_memo];
    lz = new lazy_t[max_memo];
    fill(t, t + max_memo, identity);
    fill(lz, lz + max_memo, lazy_identity);
    mleft = (zero_indexed ? 0 : 1);
    if (z.size()) build(1, mleft, n, z);
  }
  lazy_segment_tree() {}
  lazy_segment_tree(i32 _n, vector<node_t> z = vector<node_t>(0), bool zero_indexed = false) {
    init(_n, z, zero_indexed);
  }
  void update(i32 L, i32 R, lazy_t x) {
    if (L > R) return;
    _L = L; _R = R; _x = x;
    __update(1, mleft, n);
  }
  node_t query(i32 L, i32 R) {
    if (L > R) return identity;
    _L = L; _R = R;
    collector = identity;
    __query(1, mleft, n);
    return collector;
  }
};
class node {
public:
  using node_t = int;
  using lazy_t = int;
  constexpr static node_t identity = -1e9;
  constexpr static lazy_t lazy_identity = 0;
  constexpr static node_t merge(const node_t lhs, const node_t rhs) {
    return max(lhs, rhs);
  }
  constexpr static void push(lazy_t &lazy_c, const lazy_t lazy_p) {
    lazy_c += lazy_p;
  }
  constexpr static void modify(node_t &node_v, const lazy_t lazy_v) {
    node_v += lazy_v;
  }
};