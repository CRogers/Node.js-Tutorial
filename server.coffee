http = require 'http'
url = require 'url'

start = (route, handle) ->
	onRequest = (req, res) ->
		path = url.parse(req.url).pathname
		console.log "Request for " + path + " recieved."

		res.writeHead 200, {"Content-Type": "text/plain"}
		content =  route handle, path
		res.write content
		res.end
		console.log "lo hi"
		return
	
	http.createServer(onRequest).listen 8888
	console.log "Server has started"

exports.start = start
