require('dotenv').config();

const PORT = process.env.PORT,
      ADMINKEY = process.env.ADMINKEY;

const express = require('express'),
      app = express();

const compression = require('compression'),
      helmet = require('helmet'),
      cors = require('cors'),
      expressJWT = require('express-jwt');

/* --------------------------- GLOBAL MIDDLEWARES --------------------------- */
app.use(express.json(), compression(), helmet(), cors());
//Global token validation
app.use(expressJWT({ secret: ADMINKEY, algorithms: ['HS256'] }).unless({ path: ["/login"] }));

/* ------------------------------ ROUTE /login ------------------------------ */
const login = require('./routes/login')
app.use('/login', login)

/* ------------------------------ ROUTE /users ------------------------------ */
const users = require('./routes/users')
app.use('/users', users)

/* ---------------------------- ROUTE /locations ---------------------------- */
const locations = require('./routes/locations')
app.use('/locations', locations)

/* ---------------------------------- ERROR --------------------------------- */
//Endpoint not found error
app.use((req, res) => {
    res.status(404).send({
      status: 'Error',
      message: 'Endpoint not found'
    })
  });
  
  // Generic Error (MUST BE LAST)
  app.use((err, req, res, next) => {
    if (err) res.status(500).send({status: 'Error', message: 'Unexpected Error'});
    // next();
  });
  
  /* ------------------------------- CONNECTION ------------------------------- */
  app.listen(PORT, err => {
    if (err) console.log(err);
    console.log('Server listening on PORT:', PORT);
  });