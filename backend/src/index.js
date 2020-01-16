const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Aqui é uma medida de segurança básica apenas para começar a pensar no assunto, ele remove do navegador onde fala em qual linguagem o backend é desenvolvido.
//  ler https://expressjs.com/pt-br/advanced/best-practice-security.html
app.use(helmet());
app.disable('X-Powered-By');
app.use(cors());

mongoose.connect('mongodb+srv://gdonadon:gu@1993@cluster0-tezm2.gcp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);
app.listen(3333);