import {Router, Request, Response} from 'express';

export const router = Router();


router.get('/mensajes', ( request:Request, response:Response )=>{
    response.json(
        {
            ok:true,
            mensaje: 'Todo bien'
        });
});

router.post('/mensajes/:id', ( req:Request, res:Response ) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;
    
    res.json(
        {
            ok: true,
            cuerpo,
            de,
            id
        }
    );
});

