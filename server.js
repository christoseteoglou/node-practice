const express = require('express')
const app = express()
const PORT = 1337

const guestbook = require('./routes/guestbook.js')

app.use('/guestbook', guestbook)

/* app.get('/index.html', (req, res) => {
	res.sendfile('./public/index.html')
}) */

app.use(express.static('public'))

app.get('/', (req, res) => {
	res.send('Hello from server!')
})

app.listen(PORT, () => {
	console.log('I am here and ready!')
})

