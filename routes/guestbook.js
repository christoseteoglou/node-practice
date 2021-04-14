const express = require('express')
const router = express.Router()

let visitor = 0

router.get('/', (req, res) => {
	visitor++
	res.status(200).send('You are visitor number ' + visitor)
})

module.exports = router