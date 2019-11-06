// index.js
import adList from '../../../data/adlist.js';
//获取应用实例
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navList: [{
        title: '性格修正表',
        link: 'character'
      },
      {
        title: '属性克制表',
        link: 'typerestrain',
        tag: ''
      }
    ],
    infoList: [{
        title: '关于宝可梦图鉴',
        link: 'about'
      },
      {
        title: '意见反馈',
        link: 'feedback'
      }
    ],
    miniProgramList: [{
      title: '一个没有感情的杀手',
      appid: 'wx4f3c74df9e59d919',
      tag: '手慢不要点'
    }]
  },
  onShareAppMessage: function(e) {},
  onLoad: function(options) {
    this.setData({
      adList: adList
    });
  },
  goto: function(event) {
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
  },
  gotoMiniProgram: function(event) {
    var appid = event.currentTarget.dataset.appid;
    var index = event.currentTarget.dataset.index;
    console.log(appid)
    wx.navigateToMiniProgram({
      appId: appid
    })
  }
})