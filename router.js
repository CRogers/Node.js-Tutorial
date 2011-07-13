(function() {
  var route;
  route = function(handle, path) {
    console.log("About to route a request for " + path);
    if (typeof handle[path] === 'function') {
      return handle[path]();
    } else {
      return console.log("No request handler found for " + path);
    }
  };
  exports.route = route;
}).call(this);
