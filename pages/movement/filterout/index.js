//index.js
//获取应用实例
const app = getApp();
Page({
  pageNo: 1,
  pageSize: 50,
  filterList: [],
  data: {
    searchStr: '',
    isFilter: '',
    filter: '',
    moveList: [],
    status: 'more'
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
    var index = event.currentTarget.dataset.index + '';
    index = '';
    var id = event.currentTarget.dataset.id;
    if (index) {
      wx.navigateTo({
        url: '/pages/movement/detail/index?index=' + index
      });
    } else if (id) {
      wx.navigateTo({
        url: '/pages/movement/detail/index?id=' + id
      });
    }
  },
  tapFilter: function (event) {
    wx.navigateBack({});
  },
  toabout: function () {
    wx.navigateTo({
      url: '/pages/about/index'
    });
  },
  clearSearch: function () {
    this.setData({
      moveList: this.filterList
    });
  },
  onInput: function (event) {
    var vaule = event.detail.value.replace(/\s/ig, '');
    if (vaule) {
      var moveList = this.search('cname', vaule);
      this.setData({
        moveList: moveList
      });
    } else {
      this.setData({
        moveList: this.filterList
      });
    }
    this.setData({
      searchStr: vaule
    });
    return vaule;
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