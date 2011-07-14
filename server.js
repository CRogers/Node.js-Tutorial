var http, start, url;
http = require('http');
url = require('url');
start = function(route, handle) {
  var onRequest;
  onRequest = function(req, res) {
    var content, path;
    path = url.parse(req.url).pathname;
    console.log("Request for " + path + " recieved.");
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });
    content = route(handle, path);
    res.write(content);
    console.log("lo hi");
    res.end;
  };
  http.createServer(onRequest).listen(8888);
  return console.log("Server has started");
};
exports.start = start;