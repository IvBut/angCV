const express = require('express');
const emailRoute = require ('./routes/email');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/email',emailRoute);
app.use(express.static(path.join(__dirname,'../','dist','angCV')));

app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname,'../','dist','angCV','index.html'));
});

module.exports = app;
