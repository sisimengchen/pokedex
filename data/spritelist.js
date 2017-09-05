var index = 0;
var size = 1008;
var spriteList = [{
    id: '001',
    index: index++,
    bgstyle: (function() {
        return {
            x: (size - index) * 40,
            y: parseInt((size - index) / 32, 10) * 40
        };
    })(),
    name: 'Bulbasaur',
    cname: '妙蛙种子',
    ename: 'Seed Pokémon',
    type: ['grass', 'poison'],
    ctype: ['草', '毒'],
    area: ['gd', 'cd', 'kls'],
    ability: ['overgrow', 'battlearmor'],
    generation: 'I',
    eggGroup: ['monster', 'grass'],
    captureRate: 45,
    EVYield: ['1 x SpA'],
    genderRate: { male: 87.5, female: 12.5 },
    baseStats: { HP: 45, ATK: 49, DEF: 49, SPA: 65, SPD: 65, SPE: 45 },
    evolutions: [
        { id: '001' },
        { id: '002', level: 16 },
        { id: '003', level: 32 }
    ]
}, {
    id: '002',
    index: index++,
    bgstyle: (function() {
        return {
            x: (size - index) * 40,
            y: parseInt((size - index) / 32, 10) * 40
        };
    })(),
    name: 'Ivysaur',
    cname: '妙蛙草',
    ename: 'Seed Pokémon',
    type: ['grass', 'poison'],
    ctype: ['草', '毒'],
    area: ['gd', 'cd', 'kls'],
    ability: ['overgrow', 'sandveil'],
    generation: 'I',
    eggGroup: ['monster', 'grass'],
    captureRate: 45,
    EVYield: ['1 x SpA', '1 x SpD'],
    genderRate: { male: 87.5, female: 12.5 },
    baseStats: { HP: 60, ATK: 62, DEF: 63, SPA: 80, SPD: 80, SPE: 60 },
    evolutions: [
        { id: '001' },
        { id: '002', level: 16 },
        { id: '003', level: 32 }
    ]
}, {
    id: '003',
    index: index++,
    bgstyle: (function() {
        return {
            x: (size - index) * 40,
            y: parseInt((size - index) / 32, 10) * 40
        };
    })(),
    name: 'Venusaur',
    cname: '妙蛙花',
    ename: 'Seed Pokémon',
    type: ['grass', 'poison'],
    ctype: ['草', '毒'],
    area: ['gd', 'cd', 'kls'],
    ability: ['overgrow', 'chlorophyll'],
    generation: 'I',
    eggGroup: ['monster', 'grass'],
    captureRate: 45,
    EVYield: ['1 x SpA', '1 x SpD'],
    genderRate: { male: 87.5, female: 12.5 },
    baseStats: { HP: 60, ATK: 62, DEF: 63, SPA: 80, SPD: 80, SPE: 60 },
    evolutions: [
        { id: '001' },
        { id: '002', level: 16 },
        { id: '003', level: 32 }
    ]
}, {
    id: '003',
    index: index++,
    bgstyle: (function() {
        return {
            x: (size - index) * 40,
            y: parseInt((size - index) / 32, 10) * 40
        };
    })(),
    name: 'Venusaur Mega',
    cname: '妙蛙花Mega',
    ename: 'Seed Pokémon',
    type: ['grass', 'poison'],
    ctype: ['草', '毒'],
    area: ['gd', 'cd', 'kls'],
    ability: ['overgrow', 'swiftswim'],
    generation: 'I',
    eggGroup: ['monster', 'grass'],
    captureRate: 45,
    EVYield: ['1 x SpA', '1 x SpD'],
    genderRate: { male: 87.5, female: 12.5 },
    baseStats: { HP: 60, ATK: 62, DEF: 63, SPA: 80, SPD: 80, SPE: 60 }
}, {
    id: '004',
    index: index++,
    bgstyle: (function() {
        return {
            x: (size - index) * 40,
            y: parseInt((size - index) / 32, 10) * 40
        };
    })(),
    name: 'Venusaur Mega',
    cname: '小火龙',
    ename: 'Seed Pokémon',
    type: ['fire'],
    ctype: ['火'],
    area: ['gd', 'cd', 'kls'],
    ability: ['blaze', 'solarpower'],
    generation: 'I',
    eggGroup: ['monster', 'dragon'],
    captureRate: 45,
    EVYield: ['1 x SpA', '1 x SpD'],
    genderRate: { male: 87.5, female: 12.5 },
    baseStats: { HP: 60, ATK: 62, DEF: 63, SPA: 80, SPD: 80, SPE: 60 },
    evolutions: [
        { id: '004' },
        { id: '005', level: 16 },
        { id: '006', level: 36 }
    ]
}, {
    id: '005',
    index: index++,
    bgstyle: (function() {
        return {
            x: (size - index) * 40,
            y: parseInt((size - index) / 32, 10) * 40
        };
    })(),
    name: 'Venusaur Mega',
    cname: '火恐龙',
    ename: 'Seed Pokémon',
    type: ['fire'],
    ctype: ['火'],
    area: ['gd', 'cd', 'kls'],
    ability: ['blaze', 'solarpower'],
    generation: 'I',
    eggGroup: ['monster', 'dragon'],
    captureRate: 45,
    EVYield: ['1 x SpA', '1 x SpD'],
    genderRate: { male: 87.5, female: 12.5 },
    baseStats: { HP: 60, ATK: 62, DEF: 63, SPA: 80, SPD: 80, SPE: 60 },
    evolutions: [
        { id: '004' },
        { id: '005', level: 16 },
        { id: '006', level: 36 }
    ]
}, {
    id: '006',
    index: index++,
    bgstyle: (function() {
        return {
            x: (size - index) * 40,
            y: parseInt((size - index) / 32, 10) * 40
        };
    })(),
    name: 'Venusaur Mega',
    cname: '喷火龙',
    ename: 'Seed Pokémon',
    type: ['fire', 'flying'],
    ctype: ['火', '飞'],
    area: ['gd', 'cd', 'kls'],
    ability: ['blaze', 'solarpower'],
    generation: 'I',
    eggGroup: ['monster', 'dragon'],
    captureRate: 45,
    EVYield: ['1 x SpA', '1 x SpD'],
    genderRate: { male: 87.5, female: 12.5 },
    baseStats: { HP: 60, ATK: 62, DEF: 63, SPA: 80, SPD: 80, SPE: 60 },
    evolutions: [
        { id: '004' },
        { id: '005', level: 16 },
        { id: '006', level: 36 }
    ]
}, {
    id: '006',
    index: index++,
    bgstyle: (function() {
        return {
            x: (size - index) * 40,
            y: parseInt((size - index) / 32, 10) * 40
        };
    })(),
    name: 'Venusaur Mega',
    cname: '喷火龙MegaX',
    ename: 'Seed Pokémon',
    type: ['fire', 'flying'],
    ctype: ['火', '飞'],
    area: ['gd', 'cd', 'kls'],
    ability: ['blaze', 'solarpower'],
    generation: 'I',
    eggGroup: ['monster', 'dragon'],
    captureRate: 45,
    EVYield: ['1 x SpA', '1 x SpD'],
    genderRate: { male: 87.5, female: 12.5 },
    baseStats: { HP: 60, ATK: 62, DEF: 63, SPA: 80, SPD: 80, SPE: 60 }
    // evolutions: {
    //   to: { level: 32, to: 2 },
    //   from: { level: 16, from: 0 }
    // }
}, {
    id: '006',
    index: index++,
    bgstyle: (function() {
        return {
            x: (size - index) * 40,
            y: parseInt((size - index) / 32, 10) * 40
        };
    })(),
    name: 'Venusaur Mega',
    cname: '喷火龙MegaY',
    ename: 'Seed Pokémon',
    type: ['fire', 'flying'],
    ctype: ['火', '飞'],
    area: ['gd', 'cd', 'kls'],
    ability: ['blaze', 'solarpower'],
    generation: 'I',
    eggGroup: ['monster', 'dragon'],
    captureRate: 45,
    EVYield: ['1 x SpA', '1 x SpD'],
    genderRate: { male: 87.5, female: 12.5 },
    baseStats: { HP: 60, ATK: 62, DEF: 63, SPA: 80, SPD: 80, SPE: 60 }
    // evolutions: {
    //   to: { level: 32, to: 2 },
    //   from: { level: 16, from: 0 }
    // }
}];
module.exports = spriteList;
