import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://cristhian:P26011980b@comunidades-sustentavei.5pkagkd.mongodb.net/?retryWrites=true&w=majority&appName=Comunidades-Sustentaveis";
const client = new MongoClient(connectionString);

let conn;
try {
    conn = await client.connect();
} catch(e) {
    console.error(e);
}

let db = conn.db('Comunidades-Sustentaveis')

export default db;