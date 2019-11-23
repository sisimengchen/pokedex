//index.js
import ability from '../../../data/ability.js'
//获取应用实例
const app = getApp();
Page({
  allAbilityList: [],
  filterList: [],
  data: {
    abilityList: [],
  },
  onLoad: function(options) {
    wx.showLoading({
      mask: true,
      title: '数据加载中'
    });
    this.allAbilityList = [];
    const {
      table
    } = ability;
    for (let key in table) {
      this.allAbilityList.push({
        id: key,
        ...table[key + '']
      })
    }
    this.filterList = this.allAbilityList;
    this.setData({
      abilityList: this.allAbilityList
    });
  },
  onReady: function() {
    wx.hideLoading();
  },
  onShareAppMessage: function(e) {},
  tapAbility: function(event) {
    var id = event.currentTarget.dataset.id;
    id && wx.navigateTo({
      url: '/pages/abilitydetail/index' + '?id=' + id
    });
  },
  clearSearch: function() {
    this.setData({
      abilityList: this.filterList
    });
  },
  onInput: function(event) {
    var vaule = event.detail.value.replace(/\s/ig, '');
    if (this.searchStr == vaule) {
      return vaule;
    }
    if (vaule) {
      var abilityList = this.allAbilityList.filter((item) => {
        return item.cname.indexOf(vaule) > -1;
      });
      this.setData({
        abilityList: abilityList
      });
    } else {
      this.setData({
        abilityList: this.allAbilityList
      });
    }
    return this.searchStr = vaule;
  }
})