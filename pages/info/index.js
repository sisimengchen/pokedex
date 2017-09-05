// index.js
import adList from '../../data/adlist.js';
//获取应用实例
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    infoList: [
      {
        title: '关于宝可梦图鉴',
        link: 'about'
      }
    ],
    adList: []
  },
  onShareAppMessage: function (e) {
  },
  onLoad: function (options) {
    this.setData({
      adList: adList
    });
  },
  goto: function (event) {
    var link = event.currentTarget.dataset.link;
    var index = event.currentTarget.dataset.index;
    if (link) {
      wx.navigateTo({
        url: '/pages/' + link + '/index'
      });
    } else if (parseInt(index) >= 0) {
      wx.navigateTo({
        url: '/pages/advertisement/index?index=' + index
      });
    }
  }
})