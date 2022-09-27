const express = require('express');
const app = express();

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

app.use(Router);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server start!')
});