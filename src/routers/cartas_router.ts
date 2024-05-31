
import express from 'express';
import { Carta_Pokemon } from '../entity/Carta_Pokemon';
// Importamos el router de cartas

const cartasRouter = express.Router();


cartasRouter.post('/carta', async (req, res) => {
    try{
    const { nombre, tipo, nivel, coste, hp, movimientos } = req.body;
    const carta = Carta_Pokemon.create({ nombre, tipo, nivel, coste, hp, movimientos });
    await carta.save();
    res.status(201).send(carta);    
    }catch(error){
        res.status(500).send(error);
    }
})


cartasRouter.get('/carta', async (req, res) => {
    try{
        if(req.query.id){
            const carta = await Carta_Pokemon.findOne({where: {id: parseInt(req.query.id.toString())}});
            if(!carta)
                res.status(404).send({message: 'Carta no encontrada'});
            res.status(200).send(carta);
        }else{
            const cartas = await Carta_Pokemon.find();
            if(cartas.length === 0)
                res.status(404).send({message: 'No hay cartas en la base de datos'});
            res.status(200).send(cartas);
        }
    }catch(error){
        res.status(500).send(error);
    }
})



cartasRouter.delete('/carta', async (req, res) => {
    try{
        if(req.query.id){
            const carta = await Carta_Pokemon.findOne({where: {id: parseInt(req.query.id.toString())}});
            if(!carta)
                res.status(404).send({message: 'Carta no encontrada'});
            else
            await carta.remove();
            res.status(200).send({message: 'Carta eliminada'});
        }else{
            res.status(400).send({message: 'Falta el id de la carta'});
        }
    }catch(error){
        res.status(500).send(error);
    }
})


cartasRouter.patch('/carta/:id', async (req, res) => {
    if(!req.body.nombre && !req.body.tipo && !req.body.nivel && !req.body.coste && !req.body.hp && !req.body.movimientos)
    {
        res.status(400).send({message: 'Falta el cuerpo de la petición'});
    }
    try{
        const carta = await Carta_Pokemon.findOne({where: {id: parseInt(req.params.id)}});
        if(!carta)
            res.status(404).send({message: 'Carta no encontrada'});
        else{
            const { nombre, tipo, nivel, coste, hp, movimientos } = req.body;
            carta.nombre = nombre || carta.nombre;
            carta.tipo = tipo || carta.tipo;
            carta.nivel = nivel || carta.nivel;
            carta.coste = coste || carta.coste;
            carta.hp = hp || carta.hp;
            carta.movimientos = movimientos || carta.movimientos;
            await carta.save();
            res.status(200).send(carta);
        }
    }catch(error){
        res.status(500).send(error);
    }
})

export { cartasRouter };