const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const morgan  = require('morgan');
const chalk = require('chalk');
const pg = require('pg');
const sequelize = require('sequelize');
const routes = require('./routes/routes.js');

const db = require('./db.js');


const env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use('/', routes);
app.use(express.static(__dirname+'/public'));


app.listen(3000, ()=>{
    console.log('Listening on port 3000');
})