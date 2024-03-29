const express = require('express')
const app = express()
const PORT = 1337

const guestbook = require('./routes/guestbook.js')
const fruit = require('./routes/fruit.js')

app.use('/guestbook', guestbook)
app.use('/fruit', fruit)

/* app.get('/index.html', (req, res) => {
	res.sendfile('./public/index.html')
}) */

app.use(express.static('public'))

app.use((req, res, next) => {
	next(`${req.method} ${req.url}`, req.params)
	next()
})

app.get('/', (req, res) => {
	res.send('Hello from server!')
})

app.listen(PORT, () => {
	console.log('I am here and ready!')
})
