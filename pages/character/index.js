// pages/character/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tables: [
      {
        title: '攻击+',
        data: [
          { title: '怕寂寞', plus: '攻击', minus: '防御' },
          { title: '固执', plus: '攻击', minus: '特攻' },
          { title: '顽皮', plus: '攻击', minus: '特防' },
          { title: '勇敢', plus: '攻击', minus: '速度' }
        ]
      },
      {
        title: '特攻+',
        data: [
          { title: '内敛', plus: '特攻', minus: '攻击' },
          { title: '慢吞吞', plus: '特攻', minus: '防御' },
          { title: '马虎', plus: '特攻', minus: '特防' },
          { title: '冷静', plus: '特攻', minus: '速度' }
        ]
      },
      {
        title: '速度+',
        data: [
          { title: '胆小', plus: '速度', minus: '攻击' },
          { title: '急躁', plus: '速度', minus: '防御' },
          { title: '爽朗', plus: '速度', minus: '特攻' },
          { title: '天真', plus: '速度', minus: '特防' }
        ]
      },
      {
        title: '防御+',
        data: [
          { title: '大胆', plus: '防御', minus: '攻击' },
          { title: '淘气', plus: '防御', minus: '特攻' },
          { title: '乐天', plus: '防御', minus: '特防' },
          { title: '悠闲', plus: '防御', minus: '速度' }
        ]
      },
      {
        title: '特防+',
        data: [
          { title: '温和', plus: '特防', minus: '攻击' },
          { title: '温顺', plus: '特防', minus: '防御' },
          { title: '慎重', plus: '特防', minus: '特攻' },
          { title: '自大', plus: '特防', minus: '速度' }
        ]
      },
      {
        title: '无修正',
        data: [
          { title: '坦率' },
          { title: '认真' },
          { title: '勤奋' },
          { title: '害羞' },
          { title: '浮躁' }
        ]
      }
    ]
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})