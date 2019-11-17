var generation = {
  getGeneration: function (selectList) {
    var generation = {
      id: 'generation',
      name: '世代',
      items: [
        { id: '1', value: '一代' },
        { id: '2', value: '二代' },
        { id: '3', value: '三代' },
        { id: '4', value: '四代' },
        { id: '5', value: '五代' },
        { id: '6', value: '六代' },
        { id: '7', value: '七代' },
        { id: '8', value: '八代' }
      ]
    };
    if (selectList && selectList.length) {
      for (var i = 0, l = generation.items.length; i < l; i++) {
        var item = generation.items[i];
        if (selectList.indexOf(item.id) >= 0) {
          item.checked = true;
        }
      }
    }
    return generation;
  }
};
module.exports = generation;