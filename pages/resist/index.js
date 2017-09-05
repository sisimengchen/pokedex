// index.js
import type from '../../data/type.js';
//获取应用实例
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sprite: null,
    tabs: [],
    currentId: 0
  },
  onShareAppMessage: function (e) {
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var sprite = app.globalObject.getItemById(options.id);
    sprite.ctype = [];
    sprite.typeTable = [];
    for (var i = 0, l = sprite.type.length; i < l; i++) {
      var typeitem = sprite.type[i];
      sprite.ctype.push(type.getCname(typeitem));
    }
    var tabs = type.getResist(sprite.type);
    tabs[0].isActive = true; 
    this.setData({
      sprite: sprite,
      tabs: tabs
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  tapTabs: function (event) {
    var index = event.target.dataset.id;
    var currentId = this.data.currentId;
    if (currentId === index) {
      return;
    } else {
      var tabs = this.data.tabs;
      tabs[currentId].isActive = false;
      tabs[index].isActive = true;
      this.setData({
        tabs: tabs,
        currentId: index
      })
    }
  },
  tapItem: function (event) {
    var id1 = event.currentTarget.dataset.id;
    var id2 = event.target.dataset.id;
    var tabs = this.data.tabs;
    for (var i = 0, length = tabs.length; i < length; i++) {
      var tab = tabs[i];
      if (tab.id == id1) {
        var items = tab.items;
        for (var j = 0, length2 = items.length; j < length2; j++) {
          var item = tab.items[j];
          if (item.id == id2) {
            // console.log(item);
            item.checked = !item.checked;
          }
        }
      }
    }
    this.setData({
      tabs: tabs
    });
  },
  clear: function () {
    var tabs = this.data.tabs;
    for (var i = 0, length = tabs.length; i < length; i++) {
      var tab = tabs[i];
      var items = tab.items;
      for (var j = 0, length2 = items.length; j < length2; j++) {
        var item = tab.items[j];
        item.checked = false;
      }
    }
    this.setData({
      tabs: tabs
    });
  },
  confirm: function () {
    var query = {};
    var tabs = this.data.tabs;
    for (var i = 0, length = tabs.length; i < length; i++) {
      var tab = tabs[i];
      var key = tab.id;
      query[key] = [];
      var items = tab.items;
      for (var j = 0, length2 = items.length; j < length2; j++) {
        var item = tab.items[j];
        if (item.checked) {
          query[key].push(item.id)
        }
      }
    }
    // console.log(query);
  }
})