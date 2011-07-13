route = (handle, path) ->
	console.log "About to route a request for " + path
	if typeof handle[path] == 'function'
		handle[path]()
	else
		console.log "No request handler found for " + path

exports.route = route
