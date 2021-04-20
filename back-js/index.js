const express = require('express');
const app = express();

app.listen(4000, () => {
	console.log('Aplicación corriendo exitosamente en el puerto 4000');
})


// const handleRegister = () => {

// }

// const handleLogin = () => {


// }

//Routes
app.get('/register', (request, response) => {
	response.json({
		datos: 'Estas en la ruta correspondiente al: REGISTRO'
	})
})

app.get('/login', (request, response) => {
	response.json({
		datos: 'Estas en la ruta correspondiente al: LOGIN'
	})
})