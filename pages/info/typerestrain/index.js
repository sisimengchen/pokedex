// index.js
import tabs from './data.js';

Page({
  data: {
    tabs: tabs,
    currentId: 0
  },
  tapTabs: function (event) {
    var index = event.target.dataset.id;
    if (index == undefined) return
    console.log(index)
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
      });
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})