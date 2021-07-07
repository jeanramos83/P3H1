const express = require('express');
const home = require('./routes/home');

const porta = 3333;
const app = express();

app.use(express.json());
app.use('/home', home);

app.listen(porta, ()=> {
    console.log(`Servidor Rodando na porta ${porta}`);
});
