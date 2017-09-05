//index.js
import ability from '../../data/ability.js';
//获取应用实例
const app = getApp();
Page({
  data: {
    spriteList: [],
    abilityObject: null
  },
  onShareAppMessage: function (e) {
  },
  onLoad: function (options) {
    var spriteList = app.globalObject.getItemsByAbility(options.id);
    var abilityObject = ability.getAbility(options.id);
    wx.setNavigationBarTitle({
      title: abilityObject.cname
    });
    this.setData({
      spriteList: spriteList,
      abilityObject: abilityObject
    });
  },
  tapSprite: function (event) {
    // var index = event.currentTarget.dataset.index + '';
    // if (index) {
    //   wx.navigateTo({
    //     url: '/pages/sprite/index?index=' + index
    //   });
    // }
    var id = event.currentTarget.dataset.id;
    if (id) {
      wx.navigateTo({
        url: '/pages/sprite/index?id=' + id
      });
    }
  }
})
