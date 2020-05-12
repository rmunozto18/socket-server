import { Server } from "./classes/server";
import { router } from "./routes";
import bodyParse from 'body-parser';
import cors from 'cors';

const server = new Server();
//configuracion para utlizar el parseo y serealizar los request en json con bodyParse
server.app.use(bodyParse.urlencoded({extended:true}));
server.app.use(bodyParse.json());

//configuracion de cors par permitir recibir llamadas desde origen externo
server.app.use( cors ( { origin:true, credentials:true } ));
//indicamos cuales y donde estan los endpoints 
server.app.use('/', router);


server.start( () => {
    console.log(`El servidor esta correindo en el puerto: ${server.port}`);
    
});