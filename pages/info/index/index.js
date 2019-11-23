// index.js
import adList from '../../../data/adlist.js';
import {
  read,
} from '../../../utils/localStorage.js'
//获取应用实例
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    GLOBAL_SPRITE_REVERSE: read('GLOBAL_SPRITE_REVERSE') ? true : false,
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
        title: '关于',
        link: 'about'
      },
      {
        title: '意见反馈',
        link: 'feedback'
      }
    ],
    infoList2: [{
      title: '特性查询',
      link: 'ability'
    }],
    miniProgramList: [{
      title: '一个没有感情的杀手',
      appid: 'wx4f3c74df9e59d919',
      tag: '手慢不要点'
    }]
  },
  onShareAppMessage: function(e) {},
  onLoad: function(options) {
    this.setData({
      adList: adList,
      GLOBAL_SPRITE_REVERSE: read('GLOBAL_SPRITE_REVERSE') ? true : false
    });
  },
  goto: function(event) {
    var link = event.currentTarget.dataset.link;
    if (link) {
      wx.navigateTo({
        url: '/pages/info/' + link + '/index'
      });
    }
  },
  gotoMiniProgram: function(event) {
    var appid = event.currentTarget.dataset.appid;
    wx.navigateToMiniProgram({
      appId: appid
    })
  },
  switchChange: function(e) {
    const value = e.detail.value;
    this.setData({
      GLOBAL_SPRITE_REVERSE: value
    })
    app.globalObject.reverseSprite(value)
    wx.showModal({
      title: '提示',
      content: '切换排序功能会在下次小程序启动生效',
      confirmText: '立即重启',
      cancelText: '我知道了',
      success: (res) => {
        if (res.confirm) {
          wx.reLaunch({
            url: '/pages/index/index'
          })
        }
      }
    })
  }
})