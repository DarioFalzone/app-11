const express = require('express');

const app = express();

app.listen(4000, () => {
	console.log('Aplicación corriendo en el puerto 4000');
})