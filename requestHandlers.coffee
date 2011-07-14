start = ->
	console.log "Request handler 'start' was called"
	
	sleep = (ms) ->
		startTime = new Date().getTime()
		while new Date().getTime < startTime + ms
			;
	sleep 10000
	
	return "start"

upload = ->
	console.log "Request handler 'upload' was called."
	return "upload"

exports.start = start
exports.upload = upload
