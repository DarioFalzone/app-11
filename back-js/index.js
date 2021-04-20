const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.listen(4000, () => {
	console.log('Aplicación corriendo exitosamente en el puerto 4000');
})

const handleRegister = () => {
	app.post('/register', (request, response) => {
		response.json({	result: 'Ey! You have successfully registered !! :D'})
	})
	return;
}

handleRegister();

const handleLogin = () => {
	app.post('/login', (request, response) => {
		response.json({	result: 'Ey! You have Login!! <=D'})
	})
	return;
}

handleLogin();