var gendercode = {
  getText: function (key) {
    switch (key) {
      case 0: return { m: 1, f: 0 };
      case 31: return { m: 7, f: 1 };
      case 63: return { m: 3, f: 1 };
      case 127: return { m: 1, f: 1 };
      case 191: return { m: 1, f: 3 };
      case 223: return { m: 1, f: 7 };
      case 254: return { m: 0, f: 1 };
      case 255: return '无性别';
      default: return '未';
    }
  }
};
module.exports = gendercode;