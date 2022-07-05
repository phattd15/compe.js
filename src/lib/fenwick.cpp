struct fenwick {
  vector<int> bit;
  int n;
  void init(int _) { n = _; bit.assign(_ + 1, 0); }
  fenwick() {}
  fenwick(int _) { init(_); }
  int sum(int r) {
    int ret = 0;
    for (; r >= 0; r = (r & (r + 1)) - 1)
      ret += bit[r];
    return ret;
  }
  int sum(int l, int r) { return sum(r) - sum(l - 1); }
  void add(int idx, int delta) {
    for (; idx <= n; idx |= (idx + 1))
      bit[idx] += delta;
  }
} ft[150];