//index.js
//获取应用实例
const app = getApp();
Page({
  data: {
    isFilter: '',
    filter: '',
    spriteList: [],
    pageNo: 0,
    pageSize: 50,
    maxPageNo: 19
  },
  onShareAppMessage: function (e) {
  },
  onLoad: function (options) {
    this.isLoading = true;
    wx.showLoading({
      mask: true,
      title: '数据加载中'
    });
    if (options.isFilter && options.filter) {
      // 筛选后的列表
      this.filterList = app.globalObject.filter(JSON.parse(options.filter));
      var last = this.data.pageNo * this.data.pageSize + this.data.pageSize - 1;
      this.setData({
        spriteList: this.filterList.slice(0, last),
        isFilter: options.isFilter,
        filter: options.filter,
        maxPageNo: Math.ceil(this.filterList.length / this.data.pageSize)
      });
    } else {
      this.filterList = app.globalObject.spriteList;
      var last = this.data.pageNo * this.data.pageSize + this.data.pageSize - 1;
      // 未筛选的列表
      this.setData({
        spriteList: this.filterList.slice(0, last),
        isFilter: '',
        filter: '',
        maxPageNo: Math.ceil(this.filterList.length / this.data.pageSize)
      });
    }
  },
  onReady: function () {
    wx.hideLoading();
    this.isLoading = false;
    this.windowHeight = wx.getSystemInfoSync().windowHeight;
    this.scrollList = [];
  },
  onScroll: function (e) {
    if (this.data.pageNo >= this.data.maxPageNo) return;
    if (this.isLoading) return;
    var detail = e.detail;
    if (!this.scrollHeight) { // 首次
      this.scrollHeight = detail.scrollHeight;
    } else if (this.scrollHeight != detail.scrollHeight) { // 加载了新的
      this.scrollHeight = detail.scrollHeight;
    } else { // 还在原来的里面滚
      if (this.scrollList.indexOf(detail.scrollHeight) === -1 && detail.scrollHeight - detail.scrollTop - this.windowHeight < 500) {
        this.scrollList.push(detail.scrollHeight);
        this.isLoading = true;
        wx.showLoading({
          mask: true,
          title: '数据加载中'
        });
        this.data.pageNo++;
        var last = this.data.pageNo * this.data.pageSize + this.data.pageSize - 1;
        this.setData({
          spriteList: this.filterList.slice(0, last)
        });
        var me = this;
        setTimeout(function () {
          wx.hideLoading();
          me.isLoading = false;
        }, 1000);
      }
    }
  },
  tapSprite: function (event) {
    var id = event.currentTarget.dataset.id;
    if (id) {
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
  onFocus: function (event) {
    wx.navigateTo({
      url: '/pages/search/index'
    });
  }
})
