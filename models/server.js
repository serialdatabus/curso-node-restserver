const express = require('express')
var cors = require('cors')

class Server {




    constructor () {


            this.app = express();
            this.port = process.env.PORT;
            this.usuariosPath = '/api/usuarios';


            // Middlewares
            this.middlewares();


            //Rutas de mi Aplicacion
            this.routes();


    }


    middlewares() {

        //cors
        this.app.use(cors())

        // lectura y parseo del boody
        this.app.use(express.json());


        //Directorio Publico
        this.app.use(express.static('public'));


 
    }


    routes() {




        this.app.use(this.usuariosPath, require('../routes/usuarios'));







    }



    listen() {


        this.app.listen(this.port,() =>{
            console.log("Servidor corriendo en puerto:",this.port);
        });



    }





    















}


module.exports = Server;