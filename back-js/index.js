const express = require('express');
const app = express();

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.listen(4000, () => {
	console.log('Aplicación corriendo exitosamente en el puerto 4000');
})

const handleRegister = () => {
	//Routes
	app.post('/register', (request, response) => {
	response.json({	result: 'Ey! You have successfully registered !! :D'})
	})
}

// const handleLogin = () => {


// }

//Routes
app.post('/register', (request, response) => {
	response.json({	result: 'Ey! You have successfully registered !! :D'})
})

// app.get('/login', (request, response) => {
// 	response.json({
// 		datos: 'Estas en la ruta correspondiente al: LOGIN'
// 	})
// })