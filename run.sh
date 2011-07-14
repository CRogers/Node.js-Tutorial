node index.js&

while :; do
	inotifywait -e modify --exclude '^\(\(?!\.\(coffee|swp|sh\)\).\)*$' .
	pkill node
	node index.js&
done
