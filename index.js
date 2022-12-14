const express = require('express');
const app = express();
const path = require('path');

const cors = require('cors');
const mongoose = require('mongoose');
const Router = require('./src/Router/Alunos')
const dotenv = require("dotenv").config();

try{
    mongoose.connect(process.env.DB_STR_CON);
} catch (error) {
    console.log("Erro durante a conexão com MongoDB");
}

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '/src/page/info.html'));
});
app.use(Router);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server start!')
});