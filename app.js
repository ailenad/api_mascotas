const express = require('express');
const dataBase = require('./dataBase');
const usuariosRouter = require('./routes/usuarios');
require('dotenv').config();
const claveSecreta = process.env.SECRET_KEY;
const app = express();
const port = 2024;

app.use( express.json() );

// Me conecto a la BD
dataBase.on( 'error', () => {
    console.error('Error de conexion con MongoDB')
});

dataBase.once( 'open', ()=> {
    console.log('Conexión con MongoDB 👌');
})
//rutas
app.get('/', (req, res) => {
    res.send('<h1>API REST</h1>');
})
app.use('/api/usuarios', usuariosRouter);

app.listen( port, () => {
    console.log('Servidor en el puerto ', port);
})