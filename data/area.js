var area = {
  getCname: function (key) {
    switch (key) {
      case 'gd': return '关都';
      case 'cd': return '城都';
      case 'fy': return '丰缘';
      case 'as': return '奥神';
      case 'hz': return '合众';
      case 'kls': return '卡洛斯';
      case 'alk': return '阿罗拉';
      default: return '未';
    }
  },
  getArea: function (selectList) {
    var area = {
      id: 'area',
      name: '地区',
      items: [
        { id: 'gd', value: '关都' },
        { id: 'cd', value: '城都' },
        { id: 'fy', value: '丰缘' },
        { id: 'as', value: '奥神' },
        { id: 'hz', value: '合众' },
        { id: 'kls', value: '卡洛斯' },
        { id: 'alk', value: '阿罗拉' }
      ]
    };
    if (selectList && selectList.length) {
      for (var i = 0, l = area.items.length; i < l; i++) {
        var item = area.items[i];
        if (selectList.indexOf(item.id) >= 0) {
          item.checked = true;
        }
      }
    }
    return area;
  }
};
module.exports = area;