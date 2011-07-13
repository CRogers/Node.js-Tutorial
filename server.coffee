http = require 'http'
url = require 'url'

start = (route, handle) ->
	onRequest = (req, res) ->
		path = url.parse(req.url).pathname
		console.log "Request for " + path + " recieved."

		route handle, path

		res.writeHead 200, {"Content-Type": "text/plain"}
		res.write "Hello, World"
		res.end
	
	http.createServer(onRequest).listen 8888
	console.log "Server has started"

exports.start = start
