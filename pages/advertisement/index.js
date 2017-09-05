// index.js
import adList from '../../data/adlist.js';
//获取应用实例
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    ad: null
  },
  onLoad: function (options) {
    var index = parseInt(options.index);
    if (index >= 0) {
      this.setData({
        ad: adList[index]
      });
    }
  },
  onShareAppMessage: function (e) {
  }
})