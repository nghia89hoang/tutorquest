//References
//https://scotch.io/tutorials/easy-node-authentication-setup-and-local

// set up ======================================================================
// get all the tools we need
require('songbird')
const express  = require('express');
const app      = express();
const flash    = require('connect-flash');
const fs = require('fs')

const morgan       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const session      = require('express-session');
const MongoStore   = require('connect-mongo')(session)
const mongoose     = require('mongoose')
const requireDir   = require('require-dir')
const graphqlHTTP  = require('express-graphql')
const cor = require('./app/middlewares/cor')
let config = requireDir('./config', {recurse: true})
let passportMiddleware = require('./app/middlewares/passport')
const fakeDB = require('./app/data/fakeDB')

import schema from './app/graphql'
// common config
const NODE_ENV = process.env.NODE_ENV
const port     = process.env.PORT || 3100;

passportMiddleware.configure(config.auth[NODE_ENV])
app.passport = passportMiddleware.passport

// connect database 
mongoose.connect(config.database[NODE_ENV].url)
const db = mongoose.connection
mongoose.promise = global.Promise
app.fakeDB = fakeDB

// set up our express application
app.use(morgan('dev')) // log every request to the console
app.use(cookieParser()) // read cookies (needed for auth)
app.use(bodyParser.json()) // get information from html forms
app.use(bodyParser.urlencoded({extended: true})) // get information from html forms

// required for passport
app.use(session({ 
  secret: 'donttellyoumysecret',
  store: new MongoStore({
    // url: config.database[NODE_ENV].url
    mongooseConnection: db
  }),
  resave: true,
  saveUninitialized: true,
  name: 'biscuit',
  cookie: {
    maxAge: 10 * 60 * 1000,
    secure: false
  }
}))

// app.use(app.passport.initialize());
// app.use(app.passport.session()); // persistent login sessions
// app.use(flash()) // use connect-flash for flash messages stored in session
app.use(cor)
// routes ======================================================================
app.use('/graphql', graphqlHTTP(req => {
  return {
    schema: schema,
    graphiql: true,
    pretty: true
  }
}))
const ret = fs.promise.readdir('./app/modules').then( (modules) => {
  modules.map( (module) => {
    // TODO make sure module is files
    const moduleName = module.split('.').shift()
    console.log('fetching module name: ', moduleName)
    const importedModule = require(`./app/modules/${moduleName}`)(app)
    app.use(`/api/${moduleName}/`, importedModule.routes)
  } )
}).then(() => {
  app.listen(port);
  console.log('The magic happens on port ' + port);
})
// launch ======================================================================

