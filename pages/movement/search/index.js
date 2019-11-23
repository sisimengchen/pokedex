//index.js
//获取应用实例
const app = getApp();
Page({
  data: {
    moveList: [],
  },
  onLoad: function(options) {
    wx.showLoading({
      mask: true,
      title: '数据加载中'
    });
    this.filterList = app.globalObject.moveList;
  },
  onReady: function() {
    wx.hideLoading();
  },
  tapSprite: function(event) {
    var id = event.currentTarget.dataset.id;
    id && wx.navigateTo({
      url: '/pages/movement/detail/index?id=' + id
    });
  },
  tapFilter: function(event) {
    wx.navigateTo({
      url: '/pages/movement/filter/index?isFilter=' + this.data.isFilter + '&filter=' + this.data.filter
    });
  },
  toabout: function() {
    wx.navigateTo({
      url: '/pages/about/index'
    });
  },
  back: function() {
    wx.navigateBack({});
  },
  clearSearch: function() {
    this.setData({
      moveList: this.filterList
    });
  },
  onInput: function(event) {
    var vaule = event.detail.value.replace(/\s/ig, '');
    if (this.searchStr == vaule) {
      return vaule;
    }
    if (/^\d+$/.test(vaule) && !/^\d{3}$/.test(vaule)) {
      return vaule;
    }
    console.log(vaule)
    if (vaule) {
      var moveList = this.search('cname', vaule);
      this.setData({
        moveList: moveList
      });
    } else {
      this.setData({
        moveList: []
      });
    }
    return this.searchStr = vaule;
  },
  // 多属性查询精灵
  search: function(key, queryString) {
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