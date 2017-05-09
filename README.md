This is an small library that solves an issue present in [express](https://github.com/expressjs), [proxyaddr](https://github.com/jshttp/proxy-addr), [forwarded](https://www.npmjs.com/package/forwarded) and node.js itself.

The problem is that node.js set `socket.remoteAddress` to `undefined` when you use unix sockets instead of a tcp port. Forwarded returns undefined and proxyaddr thinks that this is untrusted ip even if you trust on loopback.

The current documentation of express.js states that you can configure the `trust proxy` setting like this [doc](http://expressjs.com/guide/behind-proxies.html):

```javascript
app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']);
```

But this doesn't work if you run your application non an unix socket.

Use this library as follows:

```javascript
const trustproxy = require('trustproxy');
app.set('trust proxy', trustproxy(['loopback', 'linklocal', 'uniquelocal']));
```

## Installation

```
npm i trustproxy --save
```

## License

MIT 2016 - José F. Romaniello
