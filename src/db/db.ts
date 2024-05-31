import { Client } from "pg";
const client =  new Client({
    user: "admin",
    host: "localhost",
    database: "cartas_pokemon",
    password: "12345",
 });

 client.connect().then(() => {
    console.log("Conexión exitosa a la base de datos");
    }
).catch((error) => {
    console.log("Error en la conexión a la base de datos");
    console.log(error);
});


export {client };