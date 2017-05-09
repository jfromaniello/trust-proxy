const proxyAddr = require('proxy-addr');

module.exports = function(config) {
  const validator = proxyAddr.compile(config);

  return function(ip, index) {
    if (typeof ip === 'undefined' && index === 0) {
      ip = '127.0.0.1';
    }
    return validator(ip);
  };
};
