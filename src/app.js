const express = require('express');
const cors = require('cors');
require('dotenv').config();

const magicMathRoutes = require('./routes/magicMathRoutes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/magic-math', magicMathRoutes);

module.exports = app;