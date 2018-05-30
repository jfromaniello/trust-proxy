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

  it('should be valid on 127.0.0.1', function() {
    const data = ['loopback'];
    const result = trustproxy.validate(data);
    assert.isTrue(result);
  });

  it('should be invalid for 0.0.0.0/0', function() {
    const data = ['0.0.0.0/0'];
    const result = trustproxy.validate(data);
    assert.isFalse(result);
  });
});
