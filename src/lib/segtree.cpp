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