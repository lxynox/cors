var express = require('express')
var cors = require('../../')
var app = express()

app.use(
	cors({
		origin: 'http://localhost',
	})
)

app.get('/products/:id', function(req, res, next) {
	res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.get('*', function(req, res) {
	if (req.url === '/')
		res.sendFile('index.html', {root: __dirname}, console.error)
	else if (req.url.endsWith('.js'))
		res.sendFile('script.js', {root: __dirname}, console.error)
})

app.listen(80, function() {
	console.log('CORS-enabled web server listening on port 80')
})
