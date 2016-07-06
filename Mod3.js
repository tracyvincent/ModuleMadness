var number = require('./Mod1.js');

var convert = require('./Mod2.js');

module.exports = {
  balance: function(){
    return convert(number(100, 1000000));
  },
  text: function(){
    return 'Account balance: \n';
  }
};
