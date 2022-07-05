#include "bits/stdc++.h"
using namespace std;
using splay_key = int;
struct splay_node {
  splay_node *parent = nullptr, *child[2] = {nullptr, nullptr};
  splay_key key;
  int size = 1;
  static int get_size(splay_node *x) { return x == nullptr ? 0 : x->size; }
  int parent_index() const {
    if (parent == nullptr) return -1;
    return this == parent->child[0] ? 0 : 1;
  }
  void set_child(int index, splay_node *x) {
    child[index] = x;
    if (x != nullptr) x->parent = this;
  }
  void join() {
    size = get_size(child[0]) + get_size(child[1]) + 1;
  }
};
struct splay_tree {
  static const int POOL_SIZE = 1 << 12;
  static vector<splay_node*> node_pool;
  static splay_node* new_node(const splay_key &key) {
    if (node_pool.empty()) {
      splay_node *ptr = new splay_node[POOL_SIZE];
      for (int i = POOL_SIZE - 1; i >= 0; i--)
      node_pool.push_back(ptr + i);
    }
    splay_node *node = node_pool.back();
    node_pool.pop_back();
    node->key = key;
    node->join();
    return node;
  }
  ~splay_tree() {}
  splay_node *root = nullptr;
  bool empty() const { return root == nullptr; }
  int size() const { return root == nullptr ? 0 : root->size; }
  splay_node *set_root(splay_node *x) {
    if (x != nullptr) x->parent = nullptr;
    return root = x;
  }
  void rotate_up(splay_node *x, bool x_join = true) {
    splay_node *p = x->parent, *gp = p->parent;
    int index = x->parent_index();
    if (gp == nullptr) set_root(x);
    else gp->set_child(p->parent_index(), x);
    p->set_child(index, x->child[!index]);
    x->set_child(!index, p);
    p->join();
    if (x_join) x->join();
  }
  void splay(splay_node *x) {
    while (x != root) {
      splay_node *p = x->parent;
      if (p != root) rotate_up(x->parent_index() == p->parent_index() ? p : x, false);
      rotate_up(x, false);
    }
    x->join();
  }
  void check_splay(splay_node *x, int depth) {
    assert(x != nullptr);
    int n = size(), log_n = 32 - __builtin_clz(n);
    // Splay when deep or with a certain random chance when small.
    if (depth > 2 * log_n) splay(x);
  }
  pair<splay_node*, int> insert(const splay_key &key, bool require_unique = false) {
    return insert(new_node(key), require_unique);
  }
  // Returns {new node pointer, index (number of existing elements that are strictly less)}
  pair<splay_node*, int> insert(splay_node *x, bool require_unique = false) {
    if (root == nullptr) return {set_root(x), 0};
    splay_node *current = root, *prev = nullptr;
    int below = 0, depth = 0;
    while (current != nullptr) {
      prev = current;
      depth++;
      if (current->key < x->key) {
        below += splay_node::get_size(current->child[0]) + 1;
        current = current->child[1];
      } else {
        if (require_unique && !(x->key < current->key)) {
          below += splay_node::get_size(current->child[0]);
          check_splay(current, depth);
          return {current, below};
        }
        current = current->child[0];
      }
    }
    prev->set_child(prev->key < x->key ? 1 : 0, x);
    check_splay(x, depth);
    for (splay_node *node = x; node != nullptr; node = node->parent)
    node->join();
    return {x, below};
  }
  splay_node *begin() {
    if (root == nullptr) return nullptr;
    splay_node *x = root;
    int depth = 0;
    while (x->child[0] != nullptr) {
      x = x->child[0];
      depth++;
    }
    check_splay(x, depth);
    return x;
  }
  // To iterate through all nodes in order:
  // for (splay_node *node = tree.begin(); node != nullptr; node = tree._next(node))
  splay_node *_next(splay_node *x) const {
    if (x == nullptr) return nullptr;
    if (x->child[1] != nullptr) {
      x = x->child[1];
      while (x->child[0] != nullptr) x = x->child[0];
      return x;
    }
    while (x->parent_index() == 1) x = x->parent;
    return x->parent;
  }
  splay_node *_prev(splay_node *x) const {
    if (x == nullptr) return nullptr;
    if (x->child[0] != nullptr) {
      x = x->child[0];
      while (x->child[1] != nullptr) x = x->child[1];
      return x;
    }
    while (x->parent_index() == 0) x = x->parent;
    return x->parent;
  }
  splay_node *last() {
    if (root == nullptr) return nullptr;
    splay_node *x = root;
    int depth = 0;
    while (x->child[1] != nullptr) {
      x = x->child[1];
      depth++;
    }
    check_splay(x, depth);
    return x;
  }
  void clear() {
    vector<splay_node*> nodes;
    nodes.reserve(size());
    for (splay_node *node = begin(); node != nullptr; node = _next(node)) 
      nodes.push_back(node);
    for (splay_node *node : nodes) {
      *node = splay_node();
      node_pool.push_back(node);
    }
    set_root(nullptr);
  }
  void erase(splay_node *x) {
    splay_node *new_x = nullptr, *fix_node = nullptr;
    if (x->child[0] == nullptr || x->child[1] == nullptr) {
      new_x = x->child[x->child[0] == nullptr ? 1 : 0];
      fix_node = x->parent;
    } else {
      splay_node *next = _next(x);
      assert(next != nullptr && next->child[0] == nullptr);
      new_x = next;
      fix_node = next->parent == x ? next : next->parent;
      next->parent->set_child(next->parent_index(), next->child[1]);
      next->set_child(0, x->child[0]);
      next->set_child(1, x->child[1]);
    }
    if (x == root) set_root(new_x);
    else x->parent->set_child(x->parent_index(), new_x);
    int depth = 0;
    for (splay_node *node = fix_node; node != nullptr; node = node->parent) {
      node->join();
      depth++;
    }
    if (fix_node != nullptr) check_splay(fix_node, depth);
    *x = splay_node();
    node_pool.push_back(x);
  }
  // Returns {node pointer, index (number of existing elements that are strictly less)}
  pair<splay_node*, int> lower_bound(const splay_key &key) {
    splay_node *current = root, *prev = nullptr, *answer = nullptr;
    int below = 0, depth = 0;
    while (current != nullptr) {
      prev = current;
      depth++;
      if (current->key < key) {
        below += splay_node::get_size(current->child[0]) + 1;
        current = current->child[1];
      } else {
        answer = current;
        current = current->child[0];
      }
    }
    if (prev != nullptr) check_splay(prev, depth);
    return make_pair(answer, below);
  }
  bool contains(const splay_key &key) {
    splay_node *node = lower_bound(key).first;
    return node != nullptr && node->key == key;
  }
  bool erase(const splay_key &key) {
    splay_node *x = lower_bound(key).first;
    if (x == nullptr || x->key != key) return false;
    erase(x);
    return true;
  }
  splay_node *node_at_index(int index) {
    if (index < 0 || index >= size()) return nullptr;
    splay_node *current = root;
    int depth = 0;
    while (current != nullptr) {
      int left_size = splay_node::get_size(current->child[0]);
      depth++;
      if (index == left_size) {
        check_splay(current, depth);
        return current;
      }
      if (index < left_size) {
        current = current->child[0];
      } else {
        current = current->child[1];
        index -= left_size + 1;
      }
    }
    assert(false);
  }
};
vector<splay_node*> splay_tree::node_pool;