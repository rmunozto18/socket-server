
import express from 'express';
import { SERVER_PORT } from '../global/environment';

export class Server {

    public app: express.Application;
    public port: number;

    constructor(){
        this.app = express();
        this.port = SERVER_PORT;
    }

    

//FUNCION PARA LEVANTAR EL SERVIDOR 
    start( callback:Function): void{
        this.app.listen(this.port, callback());
        //this.app.listen( this.port, callback);
    }
    
}