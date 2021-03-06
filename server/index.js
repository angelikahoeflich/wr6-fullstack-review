require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env;
const auth = require('./controllers/authController');

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

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db => {
  app.set('db', db)
  console.log('db is connected yo')
}).catch(err => console.log(err))

//authEndpoints
app.post('/auth/register', auth.register);
app.post('/auth/login', auth.login);
app.post('/auth/logout', auth.logout);
app.get('/api/user', auth.getUser);


app.listen(SERVER_PORT, ()=> console.log(`welcome to port ${SERVER_PORT}`))