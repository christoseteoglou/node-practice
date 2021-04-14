let knappen = document.querySelector('button');

knappen.addEventListener('click', button)

function button() {
	fetch('http://127.0.0.1:1337/guestbook')
		.then(response => {
			return response.text()
		})
		.then(data => document.getElementById('penis').innerHTML = data)
		.catch(error => {
			console.log(error);
		})
}




/* button = () => {
	fetch('http://127.0.0.1:1337/guestbook')
		.then(response => {
			return response.text()
		})
		.then(data => document.getElementById('penis').innerHTML = data)
		.catch(error => {
			console.log(error);
		})
} */