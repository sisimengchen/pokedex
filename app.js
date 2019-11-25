//app.js
import globalObject from './data/globalobject.js';
let interstitialAd = null;
const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    if (wx.createInterstitialAd && this.shuffle(cards)[0] == 0) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-b35d91cb29a860c3'
      })
      interstitialAd.onLoad(() => { })
      interstitialAd.onError((err) => { })
      interstitialAd.onClose(() => { })
      if (interstitialAd) {
        interstitialAd.show().catch((err) => {
          console.error(err)
        })
      }
    }
  },
  shuffle(arr) {
    var newArr = arr.slice(0);
    for (var i = newArr.length - 1; i >= 0; i--) {
      var randomIndex = Math.floor(Math.random() * (i + 1));
      var itemAtIndex = newArr[randomIndex];
      newArr[randomIndex] = newArr[i];
      newArr[i] = itemAtIndex;
    }
    return newArr;
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  },
  globalObject: globalObject
})