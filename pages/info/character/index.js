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
          { title: '怕寂寞', plus: '攻击', minus: '防御', fname: 'さみしがり | Lonely' },
          { title: '固执', plus: '攻击', minus: '特攻', fname: 'いじっぱり | Adamant' },
          { title: '顽皮', plus: '攻击', minus: '特防', fname: 'やんちゃ | Naughty' },
          { title: '勇敢', plus: '攻击', minus: '速度', fname: 'ゆうかん | Brave' }
        ]
      },
      {
        title: '特攻+',
        data: [
          { title: '内敛', plus: '特攻', minus: '攻击', fname: 'ひかえめ | Modest' },
          { title: '慢吞吞', plus: '特攻', minus: '防御', fname: 'おっとり | Mild' },
          { title: '马虎', plus: '特攻', minus: '特防', fname: 'うっかりや | Rash' },
          { title: '冷静', plus: '特攻', minus: '速度', fname: 'れいせい | Quiet' }
        ]
      },
      {
        title: '速度+',
        data: [
          { title: '胆小', plus: '速度', minus: '攻击', fname: 'おくびょう | Timid' },
          { title: '急躁', plus: '速度', minus: '防御', fname: 'せっかち | Hasty' },
          { title: '爽朗', plus: '速度', minus: '特攻', fname: 'ようき | Jolly' },
          { title: '天真', plus: '速度', minus: '特防', fname: 'むじゃき | Naive' }
        ]
      },
      {
        title: '防御+',
        data: [
          { title: '大胆', plus: '防御', minus: '攻击', fname: 'ずぶとい | Bold' },
          { title: '淘气', plus: '防御', minus: '特攻', fname: 'わんぱく | Impish' },
          { title: '乐天', plus: '防御', minus: '特防', fname: 'のうてんき | Lax' },
          { title: '悠闲', plus: '防御', minus: '速度', fname: 'のんき | Relaxed' }
        ]
      },
      {
        title: '特防+',
        data: [
          { title: '温和', plus: '特防', minus: '攻击', fname: 'おだやか | Calm' },
          { title: '温顺', plus: '特防', minus: '防御', fname: 'おとなしい | Gentle' },
          { title: '慎重', plus: '特防', minus: '特攻', fname: 'しんちょう | Careful' },
          { title: '自大', plus: '特防', minus: '速度', fname: 'なまいき | Sassy' }
        ]
      },
      {
        title: '无修正',
        data: [
          { title: '坦率', fname: 'すなお | Docile' },
          { title: '认真', fname: 'まじめ | Serious' },
          { title: '勤奋', fname: 'がんばりや | Hardy' },
          { title: '害羞', fname: 'てれや | Bashful' },
          { title: '浮躁', fname: 'きまぐれ | Quirky' }
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