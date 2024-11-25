const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { fetchCandles } = require('./services');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();

app.use('/services', fetchCandles);

app.use(express.static(path.join(__dirname, 'public')));


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});