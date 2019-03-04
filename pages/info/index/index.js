// index.js
import adList from '../../../data/adlist.js';
//获取应用实例
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navList: [
      {
        title: '性格修正表',
        link: 'character'
      },
      {
        title: '属性克制表',
        link: 'typerestrain',
        tag: 'NEW'
      }
    ],
    infoList: [
      {
        title: '关于宝可梦图鉴',
        link: 'about'
      },
      {
        title: '山寨去死',
        link: 'copycat'
      }
    ],
    nav2List: [{
      title: '意见反馈',
      link: 'feedback'
    }]
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
        url: '/pages/info/' + link + '/index'
      });
    } else if (parseInt(index) >= 0) {
      wx.navigateTo({
        url: '/pages/advertisement/index?index=' + index
      });
    }
  }
})