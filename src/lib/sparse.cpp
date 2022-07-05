#include "bits/stdc++.h"
using namespace std;
template<class combinator> 
struct sparse_table : combinator {
  using key_t = typename combinator::key_t;
  using combinator::merge;
  using i32 = int32_t;
  key_t **f;
  i32 n;
  void build(i32 _n, vector<key_t> init) {
    n = _n; 
    i32 max_lv = log2(n); 
    f = new key_t *[n + 1]; 
    for (i32 i = 1; i <= n; i ++) { 
      f[i] = new key_t[max_lv + 1]; 
      f[i][0] = init[i]; 
    }
    for (i32 lv = 1; lv <= max_lv; lv ++) 
      for (i32 i = 1; i + (1 << lv) - 1 <= n; i ++) 
        f[i][lv] = merge(f[i][lv - 1], f[i + (1 << (lv - 1))][lv - 1]);
  }
  key_t query(i32 l, i32 r) {
    i32 k = 31 - __builtin_clz(r - l + 1);
    return merge(f[l][k], f[r - (1 << k) + 1][k]);
  }
};
class lca_merge {
public:
  using key_t = pair<int, int>;
  constexpr static key_t merge(const key_t &lhs, const key_t &rhs) {
    return min(lhs, rhs);
  }
};