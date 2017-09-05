var eggGroup = {
  getCname: function (key) {
    switch (key) {
      case 'monster': return '怪兽';
      case 'water1': return '水中1';
      case 'bug': return '虫';
      case 'flying': return '飞行';
      case 'field': return '陆上';
      case 'fairy': return '妖精';
      case 'grass': return '植物';
      case 'human-like': return '人形';
      case 'water3': return '水中3';
      case 'mineral': return '矿物';
      case 'amorphous': return '不定形';
      case 'water2': return '水中2';
      case 'ditto': return '百变怪';
      case 'dragon': return '龙';
      case 'undiscovered': return '未发现蛋';
      default: return '未';
    }
  },
  getEggGroup: function (selectList) {
    var eggGroup = {
      id: 'eggGroup',
      name: '蛋组',
      items: [
        { id: 'monster', value: '怪兽' },
        { id: 'water1', value: '水中1' },
        { id: 'bug', value: '虫' },
        { id: 'flying', value: '飞行' },
        { id: 'field', value: '陆上' },
        { id: 'fairy', value: '妖精' },
        { id: 'grass', value: '植物' },
        { id: 'human-like', value: '人形' },
        { id: 'water3', value: '水中3' },
        { id: 'mineral', value: '矿物' },
        { id: 'amorphous', value: '不定形' },
        { id: 'water2', value: '水中2' },
        { id: 'ditto', value: '百变怪' },
        { id: 'dragon', value: '龙' },
        { id: 'undiscovered', value: '未发现蛋' }
      ]
    };
    if (selectList && selectList.length) {
      for (var i = 0, l = eggGroup.items.length; i < l; i++) {
        var item = eggGroup.items[i];
        if (selectList.indexOf(item.id) >= 0) {
          item.checked = true;
        }
      }
    }
    return eggGroup;
  }
};
module.exports = eggGroup;