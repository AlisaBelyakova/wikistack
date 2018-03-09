const pg = require('pg');
const Sequelize = require('sequelize');
const url = 'postgres://localhost/wikistack';
const client = new pg.Client(url);

client.connect(); 


const db = new Sequelize('postgres://localhost:3000/wikistack')

const wikistack = db.define('wikistack', {})



module.exports = client;