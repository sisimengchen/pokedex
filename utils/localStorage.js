const cache = {}; // 针对存不进去缓存的情况，做一个兼容
function save(key, data) {
  try {
    wx.setStorageSync(key, data);
    delete cache[key]; // 设置成功后清空cache
    return true;
  } catch (e) {
    cache[key] = data;
    return true;
  }
}
function read(key) {
  try {
    return wx.getStorageSync(key) || cache[key] || '';
  } catch (e) {
    return cache[key] || false;
  }
}
function remove(key) {
  try {
    delete cache[key];
    return wx.removeStorageSync(key);
  } catch (e) {
    return false;
  }
}

module.exports = {
  save: save,
  read: read,
  remove: remove
}