(function() {
  var show, start, upload;
  start = function(res, postData) {
    var body;
    console.log("Request handler 'start' was called");
    body = '<html>' + '<head>' + '<meta http-equiv="Content-Type" content="text/html; ' + 'charset=UTF-8" />' + '</head>' + '<body>' + '<form action="/upload" method="post">' + '<textarea name="text" rows="20" cols="60"></textarea>' + '<input type="submit" value="Submit text" />' + '</form>' + '</body>' + '</html>';
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.write(body);
    return res.end;
  };
  upload = function(res, postData) {
    console.log("Request handler 'upload' was called.");
    res.wrtieHead(200, {
      "Content-Type": "text/plain"
    });
    res.write("You've sent the text");
    querystring.parse(postData).text;
    return res.end;
  };
  show = function(res, postData) {
    console.log("Request handler 'show' was called.");
    return fs.readFile("/tmp/test.png", "binary", function(error, file) {
      if (error) {
        res.writeHead(500, {
          "Content-Type": "text/plain"
        });
        res.write(errror + "\n");
      } else {
        res.writeHead(200, {
          "Content-Type": "image/png"
        });
        res.write(file, "binary");
      }
      return res.end;
    });
  };
  exports.start = start;
  exports.upload = upload;
  exports.show = show;
}).call(this);
