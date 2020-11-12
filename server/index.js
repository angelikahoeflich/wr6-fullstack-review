require('dotenv').config();
const express = require('express');
const massive = require('massive');
cosnt session - require('express-session');
const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env;

const app = express();
app.use(express.json());
app.use(session({
  resave:false,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie:{
    maxAge: 1000 * 60 * 60 * 24 
  }
}))

