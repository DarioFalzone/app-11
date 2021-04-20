const express = require('express');
const app = express();

app.listen(4000, () => {
	console.log('Aplicación corriendo exitosamente en el puerto 4000');
})

//Routes
// app.get('/login', (request, response) => {
// 	console.log(__filename);
// 	response.sendFile(path.resolve(__filename, 'C:/Users/Dario%20Falzone/Desktop/RadiumRocket/problem-10/public/login.html'))
// })

// app.get('/register', (request, response) => {
// 	console.log(__filename);
// 	response.sendFile(path.resolve(__filename, '/c/Users/Dario Falzone/Desktop/RadiumRocket/problem-10/public/register.html'))
// })