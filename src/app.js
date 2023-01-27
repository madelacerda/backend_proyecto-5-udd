import cors from 'cors';
import express from 'express';
import { startConnection } from './config/database.config.js';
import environment from './config/environment.js';
import authRouter from './resources/auth/routes/auth.routes.js';
import productsRouter from './resources/products/routes/products.routes.js';
import usersRouter from './resources/users/routes/users.routes.js';
// Se crea una instancia de una aplicación express
const app = express();

// Iniciamos la conexión a la base de datos
startConnection()

// Confirar cors
app.use( cors() )

// Se configura un middleware para aceptar requests de tipo JSON
app.use( express.json() )

// Se agrega una ruta (endpoint) por defecto
app.get( '/', function ( req, res ) {
  res.json( { message: "hola mundo" } );
} );

// Se agrega el endpoint de auth
app.use( authRouter )

// Se agrega el endpoint de products
app.use( productsRouter )

// Se agrega el endpoint de users
app.use( usersRouter )

// Se inicia la aplicación y se queda escuchando requests
console.log( `App iniciada en el puerto: ${ environment.PORT }` )
app.listen( environment.PORT );