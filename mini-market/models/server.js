import express from "express";
import 'dotenv/config';

export class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3001;
        this.middleware();
        this.routes();
    }
//segundo metodo de mi clase que se ejecuta al iniciar el servidor
    routes() {
        this.app.get('/', (req, res) => {
            res.send({'message': 'Hola mundo desde mi servidor'});
        });
    }

//Metodo tres de mi clase server
middleware(){
    this.app.use(express.static('public'));
}

// primer metodo que se ejecuta al iniciar el servidor
    listen() {
        this.app.listen(this.port, () => {
            console.log(`corriendo en el puerto:${this.port}`);});
    }
}


export default Server;