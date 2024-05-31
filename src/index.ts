import  "./db/db.js";
import express from "express";
import { cartasRouter } from "./routers/cartas_router.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cartasRouter);
app.use(express.static('public'));
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});