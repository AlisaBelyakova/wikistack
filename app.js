const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const morgan  = require('morgan');
const chalk = require('chalk');
const pg = require('pg');
const sequelize = require('sequelize');
const routes = require('./routes');
const models = require('./models');
const logger = morgan('dev');

const env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use('/', routes);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger);


models.db.sync({force: true})
    .then( () => {
        console.log('All tables created!');
        app.listen(3000, () => {
            console.log('Listening on port 3000');
        });

    })
    .catch(console.error.bind(console));
