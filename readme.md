# WEEK 11
# Descripción del problema a resolver
La problemática de la semana 11 consiste en realizar un proyecto NPM con funciones para manejar
peticiones o llamadas HTTP generadas a partir de los datos ingresados en nuestros formularios de
registro y login que venimos trabajando en las semanas previas.

Una vez que el usuario envíe el formulario deberemos realizar un llamada HTTP con los datos
ingresados. Nuestro servidor recibirá dicha llamada y la procesará. Una vez procesada la llamada, el
servidor enviará una respuesta al navegador con el resultado del procesamiento.

En el escenario de registro de usuario, el procesamiento de los datos consistirá en guardar el nuevo
usuario en una variable que guardaremos en el servidor y enviar una respuesta con un mensaje de
éxito. En el caso del formulario login, el procesamiento de los datos consistirá en buscar el usuario en
la variable antes mencionada, verificar que la password recibida sea la misma y enviar una respuesta
con un mensaje de éxito.

La respuesta a esta problemática debe realizarse en un repositorio nuevo para el código backend,
respondiendo con la url de Github del nuevo repositorio. Los cambios realizados en el repositorio
frontend para conectarse deben subirse al proyecto de la semana 10.

# PASOS:
*En caso de no tener instalado Node.js en su computadora, instalar desde nodejs.org.

1) Crear una carpeta nueva y dentro de la misma crear un archivo JavaScript llamado “index.js”
que será el archivo principal de nuestra aplicación.

2) Utilizar Git Init, sobre la carpeta que contiene el archivo con las respuestas, para iniciar Git.

3) Crear un repositorio nuevo en GitHub y utilizar Git Remote Add para vincularlo.

4) Inicializar el proyecto con NPM utilizando el command “npm init”.

5) Utilizando NPM, instalar express y nodemon.

6) Agregar el código JavaScript necesario para crear la aplicación web con Express e inicializarla
escuchando en el puerto 4000.

7) Crear un npm script en package.json que ejecute nuestro index.js con nodemon.

8) Crear 2 funciones vacías (por ahora) necesarias para manejar las llamadas HTTP, una llamada
handleRegister y otra handleLogin.

9) Crear dos rutas POST /register y PUT /login en la app de Express. Asociar las funciones del
punto anterior a la ruta correspondiente.

10) En cada función del punto 8, agregar el código JavaScript necesario para poder realizar el
manejo de la llamada HTTP. Tomar los datos enviados en el cuerpo (body) de la llamada POST
o PUT y procesarlos como se menciona anteriormente.

11) En las funciones que manejan el evento de submit de los formularios de las semanas pasadas
tomar los datos ingresados en el formulario y enviarlos en el cuerpo (body) de un llamada
HTTP a nuestro servidor que corre en http://localhost:4000 utilizando fetch API. Utilizar una
URL correspondiente al formulario en cuestión, por ejemplo en el caso de login se debería
realizar la llamada con una URL http://localhost:4000/login.

12) Responder la problemática semanal con el link al nuevo repositorio creado en los pasos 2 y 3
de este enunciado.

