var type = {
    table: {
        normal: {
            normal: 1,
            fighting: 1,
            flying: 1,
            poison: 1,
            ground: 1,
            rock: 0.5,
            bug: 1,
            ghost: 0,
            steel: 0.5,
            fire: 1,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 1,
            ice: 1,
            dragon: 1,
            dark: 1,
            fairy: 1
        },
        fighting: {
            normal: 2,
            fighting: 1,
            flying: 0.5,
            poison: 0.5,
            ground: 1,
            rock: 2,
            bug: 0.5,
            ghost: 0,
            steel: 2,
            fire: 1,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 0.5,
            ice: 2,
            dragon: 1,
            dark: 2,
            fairy: 0.5
        },
        flying: {
            normal: 1,
            fighting: 2,
            flying: 1,
            poison: 1,
            ground: 1,
            rock: 0.5,
            bug: 2,
            ghost: 1,
            steel: 0.5,
            fire: 1,
            water: 1,
            grass: 2,
            electric: 0.5,
            psychic: 1,
            ice: 1,
            dragon: 1,
            dark: 1,
            fairy: 1
        },
        poison: {
            normal: 1,
            fighting: 1,
            flying: 1,
            poison: 0.5,
            ground: 0.5,
            rock: 0.5,
            bug: 1,
            ghost: 0.5,
            steel: 0,
            fire: 1,
            water: 1,
            grass: 2,
            electric: 1,
            psychic: 1,
            ice: 1,
            dragon: 1,
            dark: 1,
            fairy: 2
        },
        ground: {
            normal: 1,
            fighting: 1,
            flying: 0,
            poison: 2,
            ground: 1,
            rock: 2,
            bug: 0.5,
            ghost: 1,
            steel: 2,
            fire: 2,
            water: 1,
            grass: 0.5,
            electric: 2,
            psychic: 1,
            ice: 1,
            dragon: 1,
            dark: 1,
            fairy: 1
        },
        rock: {
            normal: 1,
            fighting: 0.5,
            flying: 2,
            poison: 1,
            ground: 0.5,
            rock: 1,
            bug: 2,
            ghost: 1,
            steel: 0.5,
            fire: 2,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 1,
            ice: 2,
            dragon: 1,
            dark: 1,
            fairy: 1
        },
        bug: {
            normal: 1,
            fighting: 0.5,
            flying: 0.5,
            poison: 0.5,
            ground: 1,
            rock: 1,
            bug: 1,
            ghost: 0.5,
            steel: 0.5,
            fire: 0.5,
            water: 1,
            grass: 2,
            electric: 1,
            psychic: 2,
            ice: 1,
            dragon: 1,
            dark: 2,
            fairy: 0.5
        },
        ghost: {
            normal: 0,
            fighting: 1,
            flying: 1,
            poison: 1,
            ground: 1,
            rock: 1,
            bug: 1,
            ghost: 2,
            steel: 1,
            fire: 1,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 2,
            ice: 1,
            dragon: 1,
            dark: 0.5,
            fairy: 1
        },
        steel: {
            normal: 1,
            fighting: 1,
            flying: 1,
            poison: 1,
            ground: 1,
            rock: 2,
            bug: 1,
            ghost: 1,
            steel: 0.5,
            fire: 0.5,
            water: 0.5,
            grass: 1,
            electric: 0.5,
            psychic: 1,
            ice: 2,
            dragon: 1,
            dark: 1,
            fairy: 2
        },
        fire: {
            normal: 1,
            fighting: 1,
            flying: 1,
            poison: 1,
            ground: 1,
            rock: 0.5,
            bug: 2,
            ghost: 1,
            steel: 2,
            fire: 0.5,
            water: 0.5,
            grass: 2,
            electric: 1,
            psychic: 1,
            ice: 2,
            dragon: 0.5,
            dark: 1,
            fairy: 1
        },
        water: {
            normal: 1,
            fighting: 1,
            flying: 1,
            poison: 1,
            ground: 2,
            rock: 2,
            bug: 1,
            ghost: 1,
            steel: 1,
            fire: 2,
            water: 0.5,
            grass: 0.5,
            electric: 1,
            psychic: 1,
            ice: 1,
            dragon: 0.5,
            dark: 1,
            fairy: 1
        },
        grass: {
            normal: 1,
            fighting: 1,
            flying: 0.5,
            poison: 0.5,
            ground: 2,
            rock: 2,
            bug: 0.5,
            ghost: 1,
            steel: 0.5,
            fire: 0.5,
            water: 2,
            grass: 0.5,
            electric: 1,
            psychic: 1,
            ice: 1,
            dragon: 0.5,
            dark: 1,
            fairy: 1
        },
        electric: {
            normal: 1,
            fighting: 1,
            flying: 2,
            poison: 1,
            ground: 0,
            rock: 1,
            bug: 1,
            ghost: 1,
            steel: 1,
            fire: 1,
            water: 2,
            grass: 0.5,
            electric: 0.5,
            psychic: 1,
            ice: 1,
            dragon: 0.5,
            dark: 1,
            fairy: 1
        },
        psychic: {
            normal: 1,
            fighting: 2,
            flying: 1,
            poison: 2,
            ground: 1,
            rock: 1,
            bug: 1,
            ghost: 1,
            steel: 0.5,
            fire: 1,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 0.5,
            ice: 1,
            dragon: 1,
            dark: 0,
            fairy: 1
        },
        ice: {
            normal: 1,
            fighting: 1,
            flying: 2,
            poison: 1,
            ground: 2,
            rock: 1,
            bug: 1,
            ghost: 1,
            steel: 0.5,
            fire: 0.5,
            water: 0.5,
            grass: 2,
            electric: 1,
            psychic: 1,
            ice: 0.5,
            dragon: 2,
            dark: 1,
            fairy: 1
        },
        dragon: {
            normal: 1,
            fighting: 1,
            flying: 1,
            poison: 1,
            ground: 1,
            rock: 1,
            bug: 1,
            ghost: 1,
            steel: 0.5,
            fire: 1,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 1,
            ice: 1,
            dragon: 2,
            dark: 1,
            fairy: 0
        },
        dark: {
            normal: 1,
            fighting: 0.5,
            flying: 1,
            poison: 1,
            ground: 1,
            rock: 1,
            bug: 1,
            ghost: 2,
            steel: 1,
            fire: 1,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 2,
            ice: 1,
            dragon: 1,
            dark: 0.5,
            fairy: 0.5
        },
        fairy: {
            normal: 1,
            fighting: 2,
            flying: 1,
            poison: 0.5,
            ground: 1,
            rock: 1,
            bug: 1,
            ghost: 1,
            steel: 0.5,
            fire: 0.5,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 1,
            ice: 1,
            dragon: 2,
            dark: 2,
            fairy: 1
        }
    },
    getCname: function(key) {
        switch (key) {
            case 'normal':
                return '一般';
            case 'fighting':
                return '格斗';
            case 'flying':
                return '飞行';
            case 'poison':
                return '毒';
            case 'ground':
                return '地面';
            case 'rock':
                return '岩石';
            case 'bug':
                return '虫';
            case 'ghost':
                return '幽灵';
            case 'steel':
                return '钢';
            case 'fire':
                return '火';
            case 'water':
                return '水';
            case 'grass':
                return '草';
            case 'electric':
                return '电';
            case 'psychic':
                return '超能力';
            case 'ice':
                return '冰';
            case 'dragon':
                return '龙';
            case 'dark':
                return '恶';
            case 'fairy':
                return '妖精';
            default:
                return '未';
        }
    },
    getEname: function(key) {
        switch (key) {
            case '一般':
                return 'normal';
            case '格斗':
                return 'fighting';
            case '飞行':
                return 'flying';
            case '毒':
                return 'poison';
            case '地面':
                return 'ground';
            case '岩石':
                return 'rock';
            case '虫':
                return 'bug';
            case '幽灵':
                return 'ghost';
            case '钢':
                return 'steel';
            case '火':
                return 'fire';
            case '水':
                return 'water';
            case '草':
                return 'grass';
            case '电':
                return 'electric';
            case '超能力':
                return 'psychic';
            case '冰':
                return 'ice';
            case '龙':
                return 'dragon';
            case '恶':
                return 'dark';
            case '妖精':
                return 'fairy';
            default:
                return 'undefined';
        }
    },
    getResist: function(keys) {
        var datas = [{
            id: 'weak',
            name: '弱点',
            items: []
        }, {
            id: 'area',
            name: '正常',
            items: []
        }, {
            id: 'area',
            name: '抵抗',
            items: []
        }];
        if (!keys || !keys.length) {
            return datas;
        }
        var result = {
            normal: 1,
            fighting: 1,
            flying: 1,
            poison: 1,
            ground: 1,
            rock: 1,
            bug: 1,
            ghost: 1,
            steel: 1,
            fire: 1,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 1,
            ice: 1,
            dragon: 1,
            dark: 1,
            fairy: 1
        };
        for (var tablekey in this.table) {
            // tablekey = normal tablievalue = {xxx:1...}
            var tablievalue = this.table[tablekey];
            for (var i = 0, size = keys.length; i < size; i++) {
                // key = grass
                var key = keys[i];
                // 
                result[tablekey] = result[tablekey] * tablievalue[key];
                if (i == size - 1) {

                }
            }
        }
        for (var type in result) {
            var effect = result[type];
            if (effect > 1) {
                datas[0].items.push({
                    id: type,
                    value: effect,
                    cname: this.getCname(type)
                });
            } else if (effect == 1) {
                datas[1].items.push({
                    id: type,
                    value: effect,
                    cname: this.getCname(type)
                });
            } else {
                datas[2].items.push({
                    id: type,
                    value: effect,
                    cname: this.getCname(type)
                });
            }
        }
        // console.log(datas);
        return datas;
    },
    getType: function(selectList) {
        var type = {
            id: 'type',
            name: '属性',
            items: [
                { id: 'normal', value: '一般' },
                { id: 'fighting', value: '格斗' },
                { id: 'flying', value: '飞行' },
                { id: 'poison', value: '毒' },
                { id: 'ground', value: '地面' },
                { id: 'rock', value: '岩石' },
                { id: 'bug', value: '虫' },
                { id: 'ghost', value: '幽灵' },
                { id: 'steel', value: '钢' },
                { id: 'fire', value: '火' },
                { id: 'water', value: '水' },
                { id: 'grass', value: '草' },
                { id: 'electric', value: '电' },
                { id: 'psychic', value: '超能力' },
                { id: 'ice', value: '冰' },
                { id: 'dragon', value: '龙' },
                { id: 'dark', value: '恶' },
                { id: 'fairy', value: '妖精' }
            ]
        };
        if (selectList && selectList.length) {
            for (var i = 0, l = type.items.length; i < l; i++) {
                var item = type.items[i];
                if (selectList.indexOf(item.id) >= 0) {
                    item.checked = true;
                }
            }
        }
        return type;
    }
};
module.exports = type;
