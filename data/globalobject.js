import spriteList from './sprites/spriteList.js';
var globalObject = {
  // 精灵列表
  spriteList: spriteList,
  // id查询精灵
  getItemById: function (id) {
    for (var i = 0, size = this.spriteList.length; i < size; i++) {
      var item = this.spriteList[i];
      if (id == item.id) {
        return item;
      }
    }
  },
  getItemsByAbility: function (ability) {
    if (!ability) return null;
    var results = [];
    for (var i = 0, size = this.spriteList.length; i < size; i++) {
      var item = this.spriteList[i];
      if (item.ability && item.ability.length && item.ability.indexOf(ability) >= 0) {
        results.push(item);
      }
    }
    return results;
  },
  // 多属性查询精灵
  search: function (key, queryString) {
    var results = [];
    var keys = key.split(',');
    for (var i = 0, size = this.spriteList.length; i < size; i++) {
      var item = this.spriteList[i];
      for (var j = 0, jsize = keys.length; j < jsize; j++) {
        if (item[keys[j]].toLowerCase().indexOf(queryString.toLowerCase()) >= 0) {
          results.push(item);
          break;
        }
      }
    }
    return results;
  },
  filter: function (queryObject) {
    if (!queryObject) {
      return this.spriteList;
    }
    var results = [];
    //Object.assign({}, this.spriteList);;
    var qarea = queryObject.area;
    var qtype = queryObject.type;
    var qgeneration = queryObject.generation;
    var qeggGroup = queryObject.eggGroup;
    for (let i = 0, size = this.spriteList.length; i < size; i++) {
      var sprite = this.spriteList[i];
      var area = sprite.area;
      var type = sprite.type;
      var generation = sprite.generation;
      var eggGroup = sprite.eggGroup;
      var isAreaOk = qarea && qarea.length ? false : true;
      var isTypeOk = qtype && qtype.length ? false : true;
      var isGenerationOk = qgeneration && qgeneration.length ? false : true;
      var isEggGroupOk = qeggGroup && qeggGroup.length ? false : true;
      if (!isAreaOk) {
        for (let j = 0, l = qarea.length; j < l; j++) {
          if (area.indexOf(qarea[j]) >= 0) {
            isAreaOk = true;
          } else {
            isAreaOk = false;
            break;
          }
        }
      }
      if (isAreaOk && !isTypeOk) {
        for (let j = 0, l = qtype.length; j < l; j++) {
          if (type.indexOf(qtype[j]) >= 0) {
            isTypeOk = true;
          } else {
            isTypeOk = false;
            break;
          }
        }
      }
      if (isAreaOk && isTypeOk && !isGenerationOk) {
        for (let j = 0, l = qgeneration.length; j < l; j++) {
          if (generation == qgeneration[j]) {
            isGenerationOk = true;
            break;
          } else {
            isGenerationOk = false;
          }
        }
      }
      if (isAreaOk && isTypeOk && isGenerationOk && !isEggGroupOk) {
        for (let j = 0, l = qeggGroup.length; j < l; j++) {
          if (eggGroup.indexOf(qeggGroup[j]) >= 0) {
            isEggGroupOk = true;
          } else {
            isEggGroupOk = false;
            break;
          }
        }
      }
      if (isAreaOk && isTypeOk && isGenerationOk && isEggGroupOk) {
        results.push(sprite);
      }
    }
    return results;
  }
};
module.exports = globalObject;