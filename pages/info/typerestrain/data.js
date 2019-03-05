import type from '../../../data/type.js';

const data = [{
  name: '弱点',
  isActive: true,
  base: 2,
  items: [
    [
      ['fighting'],
      ['normal'],
      []
    ],
    [
      ['flying', 'psychic', 'fairy'],
      ['fighting'],
      ['normal', 'rock', 'steel', 'ice', 'dark']
    ],
    [
      ['rock', 'electric', 'ice'],
      ['flying'],
      ['fighting', 'bug', 'grass']
    ],
    [
      ['ground', 'psychic'],
      ['poison'],
      ['grass', 'fairy']
    ],
    [
      ['water', 'grass', 'ice'],
      ['ground'],
      ['poison', 'rock', 'steel', 'fire', 'electric']
    ],
    [
      ['fighting', 'ground', 'steel', 'water', 'grass'],
      ['rock'],
      ['flying', 'bug', 'fire', 'ice']
    ],
    [
      ['flying', 'rock', 'fire'],
      ['bug'],
      ['grass', 'psychic', 'dark']
    ],
    [
      ['ghost', 'dark'],
      ['ghost'],
      ['ghost', 'psychic']
    ],
    [
      ['fighting', 'ground', 'fire'],
      ['steel'],
      ['rock', 'ice', 'fairy']
    ],
    [
      ['ground', 'rock', 'water'],
      ['fire'],
      ['bug', 'steel', 'grass', 'ice']
    ],
    [
      ['grass', 'electric'],
      ['water'],
      ['ground', 'rock', 'fire']
    ],
    [
      ['flying', 'poison', 'bug', 'fire', 'ice'],
      ['grass'],
      ['ground', 'rock', 'water']
    ],
    [
      ['ground'],
      ['electric'],
      ['flying', 'water']
    ],
    [
      ['bug', 'ghost', 'dark'],
      ['psychic'],
      ['fighting', 'poison']
    ],
    [
      ['fighting', 'rock', 'steel', 'fire'],
      ['ice'],
      ['flying', 'ground', 'grass', 'dragon']
    ],
    [
      ['ice', 'dragon', 'fairy'],
      ['dragon'],
      ['dragon']
    ],
    [
      ['fighting', 'bug', 'fairy'],
      ['dark'],
      ['ghost', 'psychic']
    ],
    [
      ['poison', 'steel'],
      ['fairy'],
      ['fighting', 'dragon', 'dark']
    ]
  ]
},
{
  name: '抵抗',
  isActive: false,
  base: 0.5,
  items: [
    [
      [],
      ['normal'],
      ['rock', 'steel']
    ],
    [
      ['bug', 'rock', 'dark'],
      ['fighting'],
      ['flying', 'poison', 'bug', 'psychic', 'fairy']
    ],
    [
      ['fighting', 'bug', 'grass'],
      ['flying'],
      ['rock', 'steel', 'electric'],
    ],
    [
      ['fighting', 'poison', 'bug', 'grass', 'fairy'],
      ['poison'],
      ['poison', 'ground', 'rock', 'ghost']
    ],
    [
      ['poison', 'rock'],
      ['ground'],
      ['bug', 'grass']
    ],
    [
      ['normal', 'flying', 'poison', 'fire'],
      ['rock'],
      ['fighting', 'ground', 'steel']
    ],
    [
      ['fighting', 'ground', 'grass'],
      ['bug'],
      ['fighting', 'flying', 'poison', 'ghost', 'steel', 'fire', 'fairy']
    ],
    [
      ['poison', 'bug'],
      ['ghost'],
      ['dark']
    ],
    [
      ['normal', 'flying', 'rock', 'bug', 'steel', 'grass', 'psychic', 'ice', 'dragon', 'fairy'],
      ['steel'],
      ['steel', 'fire', 'water', 'electric']
    ],
    [
      ['bug', 'steel', 'fire', 'grass', 'ice', 'fairy'],
      ['fire'],
      ['rock', 'fire', 'water', 'dragon']
    ],
    [
      ['steel', 'fire', 'water', 'ice'],
      ['water'],
      ['water', 'grass', 'dragon']
    ],
    [
      ['ground', 'water', 'grass', 'electric'],
      ['grass'],
      ['flying', 'poison', 'bug', 'steel', 'fire', 'grass', 'dragon']
    ],
    [
      ['flying', 'steel', 'electric'],
      ['electric'],
      ['grass', 'electric', 'dragon']
    ],
    [
      ['fighting', 'psychic'],
      ['psychic'],
      ['steel', 'psychic']
    ],
    [
      ['ice'],
      ['ice'],
      ['steel', 'fire', 'water', 'ice']
    ],
    [
      ['fire', 'water', 'grass', 'electric'],
      ['dragon'],
      ['steel']
    ],
    [
      ['ghost', 'dark'],
      ['dark'],
      ['fighting', 'dark', 'fairy']
    ],
    [
      ['fighting', 'bug', 'dark'],
      ['fairy'],
      ['poison', 'steel', 'fire']
    ]
  ]
},
{
  name: '免疫',
  isActive: false,
  base: 0,
  items: [
    [
      ['electric'],
      ['ground'],
      ['flying']
    ],
    [
      ['normal', 'fighting'],
      ['ghost'],
      ['normal']
    ],
    [
      ['dragon'],
      ['fairy'],
      []
    ],
    [
      ['psychic'],
      ['dark'],
      []
    ],
    [
      ['poison'],
      ['steel'],
      []
    ]
  ]
}
]

const tabs = []
for (var i = 0; i < data.length; i++) {
  const tabdata = data[i].items
  tabs[i] = data[i]
  for (var j = 0; j < tabdata.length; j++) {
    const row = tabdata[j]
    tabs[i].items[j] = tabdata[j]
    for (var k = 0; k < row.length; k++) {
      const types = row[k]
      tabs[i].items[j][k] = types;
      for (var z = 0; z < types.length; z++) {
        const t = types[z]
        tabs[i].items[j][k][z] = {
          cname: type.getCname(t),
          ename: t
        }
      }
    }
  }
}

module.exports = tabs