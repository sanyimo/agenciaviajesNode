import express from 'express';
import db from './config/db.js';
import router from './routes/index.js';


const app = express();//antes de imports


// Conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada') )
    .catch( error => console.log(error));

//definir puerto
const port = process.env.PORT || 4000;//variables de entorno

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";
    next();
});

//agregar body parser para leer los datos del formulario
// Habilitar express.json
app.use(express.urlencoded({ extended: true }));

// Definir la carpeta publica
app.use(express.static('public'));//soporta get, post, patch, put, delete

// Agregar Router
app.use('/', router);

app.listen(port, () => {
    console.log(`El Servidor está funcionando en el puerto ${port}`)
})