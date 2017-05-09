const trustproxy = require('./..')
const assert = require('chai').assert;

describe('trust-proxy', function() {
  it('should trust on undefined', function() {
    const validator = trustproxy(['loopback']);
    const result = validator(undefined, 0);
    assert.ok(result);
  });

  it('should trust on 127.0.0.1', function() {
    const validator = trustproxy(['loopback']);
    const result = validator(undefined, 0);
    assert.ok(result);
  });
});
