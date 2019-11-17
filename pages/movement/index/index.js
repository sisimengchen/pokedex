//index.js
//获取应用实例
const app = getApp();
Page({
  pageNo: 1,
  pageSize: 50,
  filterList: [],
  data: {
    isFilter: '',
    filter: '',
    moveList: [],
    status: 'more'
  },
  onShareAppMessage: function (e) {
  },
  onLoad: function (options) {
    wx.showLoading({
      mask: true,
      title: '数据加载中'
    });
    if (options.isFilter && options.filter) {
      // 筛选后的列表
      this.filterList = app.globalObject.filterMove(JSON.parse(options.filter));
      this.setData({
        isFilter: options.isFilter,
        filter: options.filter
      }, () => {
        this.getRecords()
      });
    } else {
      this.filterList = app.globalObject.moveList;
      // 未筛选的列表
      this.setData({
        isFilter: '',
        filter: ''
      }, () => {
        this.getRecords()
      });
    }
  },
  onReady: function () {
    wx.hideLoading();
  },
  onReachBottom: function (e) {
    const {
      status
    } = this.data
    if (status == 'loading' || status == 'noMore') return;
    this.getRecords();
  },
  getRecords: function () {
    const {
      status
    } = this.data
    if (status == 'loading' || status == 'noMore') return;
    const endIndex = this.pageNo * this.pageSize;
    const moveList = this.filterList.slice(0, endIndex);
    wx.showLoading({
      mask: true,
      title: '数据加载中'
    });
    this.setData({
      moveList,
      status: 'loading'
    }, () => {
      setTimeout(() => {
        wx.hideLoading();
        if (this.data.status == 'loading') {
          this.setData({
            status: 'more'
          })
        }
      }, 500);
    })
    if (endIndex >= this.filterList.length) {
      this.setData({
        status: 'noMore'
      })
    } else {
      this.pageNo++;
    }
  },
  tapSprite: function (event) {
    var id = event.currentTarget.dataset.id;
    if (id) {
      wx.navigateTo({
        url: '/pages/movement/detail/index?id=' + id
      });
    }
  },
  tapFilter: function (event) {
    wx.navigateTo({
      url: '/pages/movement/filter/index?isFilter=' + this.data.isFilter + '&filter=' + this.data.filter
    });
  },
  onFocus: function (event) {
    wx.navigateTo({
      url: '/pages/movement/search/index'
    });
  }
})
