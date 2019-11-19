import spriteList from './pokemons/pokemons.js';
import moveList from './moves/moves.js';
import { save, read, remove } from '../utils/localStorage.js'

var globalObject = {
  // 精灵列表
  spriteList: read('GLOBAL_SPRITE_REVERSE') ? spriteList.reverse() : spriteList,
  // id查询精灵
  getItemById: function (id) {
    for (var i = 0, size = this.spriteList.length; i < size; i++) {
      var item = this.spriteList[i];
      if (id == item.id) {
        return item;
      }
    }
  },
  isReversed: read('GLOBAL_SPRITE_REVERSE') ? true : false,
  reverseSprite: function (value) {
    if (this.isReversed == !!value) {
      return
    } else {
      this.isReversed = !!value;
      if (this.isReversed) {
        save('GLOBAL_SPRITE_REVERSE', 1)
      } else {
        remove('GLOBAL_SPRITE_REVERSE')
      }
      this.spriteList = this.spriteList.reverse()
    }
  },
  // id获取世代
  getGgenerationById: function (id) {
    id = parseInt(id, 10);
    if (id < 152) {
      return 1;
    }
    if (id < 252) {
      return 2;
    }
    if (id < 387) {
      return 3;
    }
    if (id < 494) {
      return 4;
    }
    if (id < 650) {
      return 5;
    }
    if (id < 722) {
      return 6;
    }
    if (id < 810) {
      return 7;
    }
    return 8;
  },
  // 通过精灵特征查询精灵列表
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
  // 获取精灵的进化信息
  getEvolutions: function (sprite) {
    var evolutions = sprite.evolutions,
      step1 = evolutions[0],
      step2 = evolutions[1],
      step3 = evolutions[2],
      step1List = [],
      step2List = [],
      step3List = [];
    if (step3) {
      for (var i = 0; i <= 7; i++) {
        var idkey = 'id' + (i ? i : '');
        var idvalue = step3[idkey];
        var levelkey = 'level' + (i ? i : '');
        var stonekey = 'stone' + (i ? i : '');
        var happinesskey = 'happiness' + (i ? i : '');
        var exchangekey = 'exchange' + (i ? i : '');
        var otherkey = 'other' + (i ? i : '');
        var sprite = idvalue ? this.getItemById(idvalue) : {};
        var e = {
          id: step3[idkey],
          level: step3[levelkey],
          stone: step3[stonekey],
          happiness: step3[happinesskey],
          exchange: step3[exchangekey],
          other: step3[otherkey],
          index: sprite.index,
          name: sprite.name,
          cname: sprite.cname,
          className: idvalue ? (idvalue == sprite.id ? 'current' : '') : 'empty',
          stand: idvalue ? '' : 'stand'
        }
        step3List.push(e);
      }
    }
    if (step2) {
      for (var i = 0; i <= 7; i++) {
        var idkey = 'id' + (i ? i : '');
        var idvalue = step2[idkey]
        var levelkey = 'level' + (i ? i : '');
        var stonekey = 'stone' + (i ? i : '');
        var happinesskey = 'happiness' + (i ? i : '');
        var exchangekey = 'exchange' + (i ? i : '');
        var otherkey = 'other' + (i ? i : '');
        var sprite = idvalue ? this.getItemById(idvalue) : {};
        var e = {
          id: step2[idkey],
          level: step2[levelkey],
          stone: step2[stonekey],
          happiness: step2[happinesskey],
          exchange: step2[exchangekey],
          other: step2[otherkey],
          index: sprite.index,
          name: sprite.name,
          cname: sprite.cname,
          className: idvalue ? (idvalue == sprite.id ? 'current' : '') : 'empty',
          stand: idvalue ? '' : 'stand'
        }
        step2List.push(e);
      }
    }
    if (step1) {
      for (var i = 0; i <= 7; i++) {
        var idkey = 'id' + (i ? i : '');
        var idvalue = step1[idkey]
        var levelkey = 'level' + (i ? i : '');
        var stonekey = 'stone' + (i ? i : '');
        var happinesskey = 'happiness' + (i ? i : '');
        var exchangekey = 'exchange' + (i ? i : '');
        var otherkey = 'other' + (i ? i : '');
        var sprite = idvalue ? this.getItemById(idvalue) : {};
        var e = {
          id: step1[idkey],
          level: step1[levelkey],
          stone: step1[stonekey],
          happiness: step1[happinesskey],
          exchange: step1[exchangekey],
          other: step1[otherkey],
          index: sprite.index,
          name: sprite.name,
          cname: sprite.cname,
          className: idvalue ? (idvalue == sprite.id ? 'current' : '') : 'empty'
        }
        step1List.push(e);
      }
    }
    item.evolutmax = [];
    for (var i = 0; i <= 7; i++) {
      var s1 = step1List[i] || { id: undefined, className: 'empty' };
      var s2 = step2List[i] || { id: undefined, className: 'empty', stand: 'stand' };
      var s3 = step3List[i] || { id: undefined, className: 'empty', stand: 'stand' };
      if (s1.id || s2.id || s3.id) {
        var list = [];
        list.push(s1);
        list.push(s2);
        list.push(s3);
        item.evolutmax.push(list);
      }
    }
    return sprite;
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
  // 筛选
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
      var generation = sprite.generation || this.getGgenerationById(sprite.id);
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
  },
  // 招式列表
  moveList: moveList,
  // id查询招式
  getMoveById: function (id) {
    for (var i = 0, size = this.moveList.length; i < size; i++) {
      var item = this.moveList[i];
      if (id == item.id) {
        return item;
      }
    }
  },
  // 多属性查询招式
  searchMove: function (key, queryString) {
    var results = [];
    var keys = key.split(',');
    for (var i = 0, size = this.moveList.length; i < size; i++) {
      var item = this.moveList[i];
      for (var j = 0, jsize = keys.length; j < jsize; j++) {
        if (item[keys[j]].toLowerCase().indexOf(queryString.toLowerCase()) >= 0) {
          results.push(item);
          break;
        }
      }
    }
    return results;
  },
  // 筛选招式
  filterMove: function (queryObject) {
    if (!queryObject) {
      return this.moveList;
    }
    var results = [];
    var qtype = queryObject.type;
    var qmovetype = queryObject.movetype;
    for (let i = 0, size = this.moveList.length; i < size; i++) {
      var move = this.moveList[i];
      var type = move.type;
      var movetype = move.movetype;
      var isTypeOk = qtype && qtype.length ? false : true;
      var isMovetypeOk = qmovetype && qmovetype.length ? false : true;
      if (!isTypeOk) {
        for (let j = 0, l = qtype.length; j < l; j++) {
          if (type.indexOf(qtype[j]) >= 0) {
            isTypeOk = true;
          } else {
            isTypeOk = false;
            break;
          }
        }
      }
      if (isTypeOk && !isMovetypeOk) {
        for (let j = 0, l = qmovetype.length; j < l; j++) {
          if (movetype.indexOf(qmovetype[j]) >= 0) {
            isMovetypeOk = true;
          } else {
            isMovetypeOk = false;
            break;
          }
        }
      }
      if (isTypeOk && isMovetypeOk) {
        results.push(move);
      }
    }
    return results;
  }
};
module.exports = globalObject;