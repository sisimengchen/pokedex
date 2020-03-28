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
    GLOBAL_SPRITE_GALAR: read('GLOBAL_SPRITE_GALAR') ? true : false,
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
      title: 'Latte动森图鉴',
      appid: 'wxbae57ea6496c7e66',
      // path: 'index.html?wxgamecid=CCBgAAoXkpQY9RNKbeAY7O',
      tag: '居家旅行、钓鱼捉虫、必备良药'
    }]
  },
  onShareAppMessage: function(e) {},
  onLoad: function(options) {
    this.setData({
      adList: adList,
      GLOBAL_SPRITE_REVERSE: read('GLOBAL_SPRITE_REVERSE') ? true : false,
      GLOBAL_SPRITE_GALAR: read('GLOBAL_SPRITE_GALAR') ? true : false
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
    var path = event.currentTarget.dataset.path;
    const data = {
      appId: appid
    }
    if (path) {
      data.path = path
    }
    wx.navigateToMiniProgram(data)
  },
  switchChange: function(e) {
    const id = e.target.dataset.id;
    if (!id) return
    const value = e.detail.value;
    const data = {}
    data[id + ''] = value
    this.setData(data)
    if (id == 'GLOBAL_SPRITE_REVERSE') {
      app.globalObject.reverseSprite(value)
    } else if (id == 'GLOBAL_SPRITE_GALAR') {
      app.globalObject.limitSprite(value)
    }
    const name = e.target.dataset.name;
    wx.showModal({
      title: '提示',
      content: `切换${name}功能会在下次小程序启动生效`,
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