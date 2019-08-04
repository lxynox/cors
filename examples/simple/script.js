fetch('http://localhost/products/1000', {
	method: 'GET',
	mode: 'cors',
	headers: {'Content-Type': 'application/json', Accept: 'application/json'},
})
	.then(res => res.json())
	.then(res => {
		console.log(res, window.location)
	})
	.catch(console.error)
