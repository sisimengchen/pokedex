// index.js
import type from '../../../data/type.js';
import data from './data.js';

Page({
  data: {
    tabs: [],
    currentId: 0
  },
  onLoad: function (options) {
    const tabs = []
    for (var i = 0; i < data.length; i++) {
      const tabdata = data[i].items
      tabs[i] = data[i]
      for (var j = 0; j < tabdata.length; j++) {
        const row = tabdata[j]
        tabs[i].items[j] = tabdata[j]
        for (var k = 0; k < row.length; k++) {
          const types = row[k]
          tabs[i].items[j][k] = types;
          for (var z = 0; z < types.length; z++) {
            const t = types[z]
            tabs[i].items[j][k][z] = {
              cname: type.getCname(t),
              ename: t
            }
          }
        }
      }
    }
    this.setData({
      tabs: tabs
    });
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
  // tapItem: function (event) {
  //   var id1 = event.currentTarget.dataset.id;
  //   var id2 = event.target.dataset.id;
  //   var tabs = this.data.tabs;
  //   for (var i = 0, length = tabs.length; i < length; i++) {
  //     var tab = tabs[i];
  //     if (tab.id == id1) {
  //       var items = tab.items;
  //       for (var j = 0, length2 = items.length; j < length2; j++) {
  //         var item = tab.items[j];
  //         if (item.id == id2) {
  //           // console.log(item);
  //           item.checked = !item.checked;
  //         }
  //       }
  //     }
  //   }
  //   this.setData({
  //     tabs: tabs
  //   });
  // },
})