'use strict'

var mongoose= require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3700;

const usuario = 'madmint';
const password = 'M4dm1nt25';
const dbName = "portafolio"

const uri = `mongodb+srv://${usuario}:${password}@cluster0.dbhrgys.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.Promise = global.Promise;

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
        .then(() =>{
            console.log("conexion a la base de datos establecida con exito...");

            //creacion del servidor
            app.listen(port, () => {
                console.log("servidor corriendo correctamente en la url localhost:3700");
            });


        })
        .catch(err => console.log(err));

