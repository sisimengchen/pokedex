//index.js
var util = require('../../utils/util.js')
Page({
  data: {
    updateList: [{
      version: '1.0',
      date: '2017.09.01',
      updateItems: [
        '简单好用的宝可梦图鉴；',
        '收录了从第一世代到第七世代的全部802只宝可梦；',
        '支持按中文名、编号搜索宝可梦；',
        '支持按属性、世代、蛋组筛选宝可梦；',
        '清晰直观的种族值、进化信息、弱点与抗性查询。'
      ]
    }, {
      version: '1.1',
      date: '2017.09.10',
      updateItems: [
        '优化了一些UI细节；',
        '更正了部分错误数据。'
      ]
    }]
  },
  onLoad: function () {
  }
})
