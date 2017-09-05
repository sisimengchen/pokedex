//index.js
//获取应用实例
const app = getApp();
Page({
  data: {
    spriteList: [],
  },
  onLoad: function (options) {
    this.isLoading = true;
    wx.showLoading({
      mask: true,
      title: '数据加载中'
    });
    this.filterList = app.globalObject.spriteList;
  },
  onReady: function () {
    wx.hideLoading();
    this.isLoading = false;
    this.windowHeight = wx.getSystemInfoSync().windowHeight;
    this.scrollList = [];
  },
  onScroll: function (e) {
  },
  tapSprite: function (event) {
    var index = event.currentTarget.dataset.index + '';
    index = '';
    var id = event.currentTarget.dataset.id;
    if (index) {
      wx.navigateTo({
        url: '/pages/sprite/index?index=' + index
      });
    } else if (id) {
      wx.navigateTo({
        url: '/pages/sprite/index?id=' + id
      });
    }
  },
  tapFilter: function (event) {
    wx.navigateTo({
      url: '/pages/filter/index?isFilter=' + this.data.isFilter + '&filter=' + this.data.filter
    });
  },
  toabout: function () {
    wx.navigateTo({
      url: '/pages/about/index'
    });
  },
  back:function() {
    wx.navigateBack({ 
    });
  },
  clearSearch: function () {
    this.setData({
      spriteList: this.filterList
    });
  },
  onInput: function (event) {
    var vaule = event.detail.value.replace(/\s/ig, '');
    if (this.searchStr == vaule) {
      return vaule;
    }
    if (/^\d+$/.test(vaule) && !/^\d{3}$/.test(vaule)) {
      return vaule;
    }
    if (vaule) {
      var spriteList = this.search('cname,id', vaule);
      console.log(vaule, spriteList);
      this.setData({
        spriteList: spriteList
      });
    } else {
      this.setData({
        spriteList: []
      });
    }
    return this.searchStr = vaule;
  },
  // 多属性查询精灵
  search: function (key, queryString) {
    var results = [];
    var keys = key.split(',');
    for (var i = 0, size = this.filterList.length; i < size; i++) {
      var item = this.filterList[i];
      for (var j = 0, jsize = keys.length; j < jsize; j++) {
        if (item[keys[j]].toLowerCase().indexOf(queryString.toLowerCase()) >= 0) {
          results.push(item);
          break;
        }
      }
    }
    return results;
  }
})