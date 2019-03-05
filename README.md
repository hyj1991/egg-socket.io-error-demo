# Egg-socket.io-error-demo

* Reference: [Cannot set property 'parsingHeadersStart' of undefined on 10.15.2](https://github.com/nodejs/node/issues/26366)
* Error node version: **v8.15.1** (v8.15.0 is well)

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Error message:

```bash
2019-03-05 14:52:21,167 ERROR 20840 nodejs.TypeError: Cannot set property 'parsingHeadersStart' of undefined (uncaughtException throw 1 times on pid:20840)
    at IncomingMessage.resetHeadersTimeoutOnReqEnd (_http_server.js:728:32)
    at emitNone (events.js:106:13)
    at IncomingMessage.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:139:11)
    at process._tickCallback (internal/process/next_tick.js:181:9)

pid: 20840
hostname: hyj1991.local
```