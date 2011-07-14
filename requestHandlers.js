var start, upload;
start = function() {
  var sleep;
  console.log("Request handler 'start' was called");
  sleep = function(ms) {
    var startTime;
    startTime = new Date().getTime();
    while (new Date().getTime < startTime + ms) {}
    return undefined;
  };
  sleep(10000);
  return "start";
};
upload = function() {
  console.log("Request handler 'upload' was called.");
  return "upload";
};
exports.start = start;
exports.upload = upload;