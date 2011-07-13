(function() {
  var http, start, url;
  http = require('http');
  url = require('url');
  start = function(route, handle) {
    var onRequest;
    onRequest = function(req, res) {
      var path;
      path = url.parse(req.url).pathname;
      console.log("Request for " + path + " recieved.");
      route(handle, path);
      res.writeHead(200, {
        "Content-Type": "text/plain"
      });
      res.write("Hello, World");
      return res.end;
    };
    http.createServer(onRequest).listen(8888);
    return console.log("Server has started");
  };
  exports.start = start;
}).call(this);
