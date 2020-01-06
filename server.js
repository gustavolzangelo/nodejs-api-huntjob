/*jshint esversion: 6 */
/* jshint node: true */
"use strict";
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json()); //Permitir o envio de dados em JSON
app.use(cors());

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {useNewUrlParser: true, useUnifiedTopology: true }
    );
requireDir('./src/models');

const Product = mongoose.model('Product');

// Primeira rota
app.use('/api',require('./src/route'));

app.listen(3001);