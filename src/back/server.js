import express from 'express';
import db from './db/connection.mjs'; 
import { ObjectId } from 'bson'; 

const app = express();

app.use(express.json());

// Middleware para servir arquivos estáticos na pasta 'public'
app.use(express.static('public'));

// Rota de login
app.post('/api/usuario/login', async (request, response) => {

    console.log('Request received for login:', request.body); 

    response.status(200).json({ mensagem: "Login efetuado com sucesso (apenas teste)" });
});

app.post('/api/usuario/cadastro', async (request, response) => {
    console.log('Request received for user registration:', request.body);

    const usuarioNovo = request.body;
    if (!usuarioNovo || Object.keys(usuarioNovo).length === 0) {
        return response.status(400).json({ error: "Dados do usuário ausentes na requisição." });
    }

    try {
        let collection = await db.collection('usuarios'); 
        const result = await collection.insertOne(usuarioNovo);
        console.log('Usuário inserido:', result.insertedId);
        response.status(201).json({ mensagem: "Usuário cadastrado com sucesso!", id: result.insertedId });
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        response.status(500).json({ error: "Erro ao cadastrar usuário no banco de dados." });
    }
});

app.post('/api/denuncia/cadastrodenuncia', async (request, response) => {
    console.log('Request received for complaint registration:', request.body); // Dados da denúncia vêm no body

    const denunciaNova = request.body;
    if (!denunciaNova || Object.keys(denunciaNova).length === 0) {
        return response.status(400).json({ error: "Dados da denúncia ausentes na requisição." });
    }

    try {
        let collection = await db.collection('denuncias'); 
        const result = await collection.insertOne(denunciaNova); 
        console.log('Denúncia inserida:', result.insertedId);
        response.status(201).json({ mensagem: "Denúncia cadastrada com sucesso!", id: result.insertedId });
    } catch (error) {
        console.error('Erro ao cadastrar denúncia:', error);
        response.status(500).json({ error: "Erro ao cadastrar denúncia no banco de dados." });
    }
});

app.listen(3000, () => console.log("Servidor em execução"));