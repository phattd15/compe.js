#include "bits/stdc++.h"
using namespace std;
const int B = 500;
struct query {
  int l, r, id;
  inline pair < int, int > to_pair() const {
    return make_pair(l / B, ((l / B) & 1) ? -r : +r);
  }
  bool operator < (const query & oth) const {
    return to_pair() < oth.to_pair();
  }
};
void solution() {
  int n;
  cin >> n;
  vector<int> state(n + 1);
  vector<int> a(n + 1);
  for (int i = 1; i <= n; i ++) {
    cin >> a[i];
  }
  int balance = 0;
  auto modify = [&](int x) {
    balance -= state[a[x]];
    state[a[x]] ^= 1;
    balance += state[a[x]];
  };
  int Q;
  cin >> Q;
  vector<query> q(Q);
  for (int i = 0; i < Q; i ++) {
    q[i].id = i;
    cin >> q[i].l;
    cin >> q[i].r;
  }
  sort(q.begin(), q.end());
  vector<int> ans(Q);
  int L = 1, R = 0;
  for (auto qq : q) {
    while (R < qq.r) modify(++R);
    while (L > qq.l) modify(--L);
    while (R > qq.r) modify(R--);
    while (L < qq.l) modify(L++);
    ans[qq.id] = ((qq.r - qq.l + 1) - balance) / 2;
  }
  for (int xx : ans) cout << xx << "\n";
}
signed main() {
  ios_base::sync_with_stdio(0); cin.tie(0);
  int tc = 1;
#ifdef DEBUG
  freopen("input.txt", "r", stdin);
#endif
  // cin >> tc; 
  while (tc --) { solution(); cout << "\n"; }
}