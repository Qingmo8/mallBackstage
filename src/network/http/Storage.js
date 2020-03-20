export default {
  getItem(key) {
    return localStorage.getItem(key)
  },
  setItem(key, value) {
    localStorage.setItem(key, value)
  },
  removeItem(key) {
    localStorage.removeItem(key)
  },
  clear() {
    // 清除数据
    localStorage.clear()
  }
}