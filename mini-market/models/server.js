import express from "express";
import 'dotenv/config';
import cors from 'cors'
export class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3001;
        this.middleware();
        this.routes();
    }
//segundo metodo de mi clase que se ejecuta al iniciar el servidor
    routes() {
        this.app.get('/api', (req, res) => {
            res.json({'message': 'Hola mundo desde mi servidor'});
        });

        this.app.post('/api', (req, res) => {
            res.json({'message': 'POST - Server'});
        });
        this.app.put('/api', (req, res) => {
            res.json({'message': 'PUT - Server'});
        });
        this.app.delete('/api', (req, res) => {
            res.json({'message': 'DELETE - Server'});
        });

    }

//Metodo tres de mi clase server
middleware(){
    this.app.use(cora());
    this.app.use(express.static('public'));
    this.app.use(express.json());
}

// primer metodo que se ejecuta al iniciar el servidor
    listen() {
        this.app.listen(this.port, () => {
            console.log(`corriendo en el puerto:${this.port}`);});
    }
}


export default Server;
