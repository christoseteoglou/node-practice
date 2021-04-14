const express = require('express')
const router = express.Router()


let fruit = ['strawberry', 'pear', 'apple', 'banana', 'orange']

router.get('/:index', (req, res) => {
	let index = req.params.index;

	if (index > fruit.length - 1) {

		let randomFruit = Math.floor(Math.random() * fruit.length)
		res.send(fruit[randomFruit])

	}

	res.send(fruit[index])
})



module.exports = router