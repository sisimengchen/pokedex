var moveType = {
  getCname: function (key) {
    switch (key) {
      case 'physical': return '物理';
      case 'special': return '特殊';
      case 'status': return '变化';
      default: return '未';
    }
  },
  getMoveType: function (selectList) {
    var movetype = {
      id: 'movetype',
      name: '类型',
      items: [
        { id: 'physical', value: '物理' },
        { id: 'special', value: '特殊' },
        { id: 'status', value: '变化' }
      ]
    };
    if (selectList && selectList.length) {
      for (var i = 0, l = movetype.items.length; i < l; i++) {
        var item = movetype.items[i];
        if (selectList.indexOf(item.id) >= 0) {
          item.checked = true;
        }
      }
    }
    return movetype;
  }
};
module.exports = moveType;