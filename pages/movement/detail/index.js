// index.js
//获取应用实例
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    move: null
  },
  onShareAppMessage: function (e) {
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var item = app.globalObject.getMoveById(options.id);
    wx.setNavigationBarTitle({
      title: item.cname
    });
    this.formate(item);
    // console.log(item);
    this.setData({
      move: item
    });
  },
  formate: function (item) {
    item.levels = [];
    item.tms = [];
    item.inherits = [];
    item.others = [];
    for (let i = 0; i < item.levelSprites.length; i++) {
      let id = item.levelSprites[i];
      let sprite = app.globalObject.getItemById(id);
      item.levels.push(sprite);
    }
    for (let i = 0; i < item.tmSprites.length; i++) {
      let id = item.tmSprites[i];
      let sprite = app.globalObject.getItemById(id);
      item.tms.push(sprite);
    }
    for (let i = 0; i < item.inheritSprites.length; i++) {
      let id = item.inheritSprites[i];
      let sprite = app.globalObject.getItemById(id);
      item.inherits.push(sprite);
    }
    for (let i = 0; i < item.otherSprites.length; i++) {
      let id = item.otherSprites[i];
      let sprite = app.globalObject.getItemById(id);
      item.others.push(sprite);
    }
  },
  tapSprite: function (event) {
    var id = event.currentTarget.dataset.id;
    if (id) {
      wx.navigateTo({
        url: '/pages/sprite/index?id=' + id
      });
    }
  }
})