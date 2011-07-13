(function() {
  var handle, requestHandlers, router, server;
  server = require('./server');
  router = require('./router');
  requestHandlers = require('./requestHandlers');
  handle = {
    "/": requestHandlers.start,
    "/start": requestHandlers.start,
    "/upload": requestHandlers.upload,
    "/show": requestHandlers.show
  };
  server.start(router.route, handle);
}).call(this);
