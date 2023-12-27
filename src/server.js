import express from 'express';
import dotenv from 'dotenv'
import knex from './services/knex.js'
import cors from 'cors'
import bearerToken from 'express-bearer-token';
dotenv.config();
import userRoute from './modules/user/user.router.js'
import authRoute from './modules/auth/auth.router.js'
import categoriaRoute from './modules/categorias/categoria.router.js'
import metaRoute from './modules/metas/meta.router.js'
import transacaoRoute from './modules/transacoes/transacao.router.js'
const app = express();
app.use(express.json());
app.use(cors());
app.use(bearerToken());

app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/categorias', categoriaRoute);
app.use('/metas', metaRoute);
app.use('/transacoes', transacaoRoute);

app.get('/health', (_, res) => {
    return res.send('Sistema está operacional');
});

app.listen(8080, async () => {
    console.log( await knex('users').select())
    console.log('Servidor rodando na porta 8080');
});