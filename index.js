const express = require('express');
const bodyParser= require('body-parser')
// requiring session
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

// requiring passport
const passport = require('passport');

const loginRoutes = require('./routes/loginroutes')
const registrationRoutes = require('./routes/registrationroutes')
const adminRoutes = require('./routes/adminroutes')
const productRoutes = require('./routes/productroutes')
const homeRoutes = require('./routes/homeroutes')
const Register = require('./models/Registration');
require('./models/Admin');
require('dotenv').config();
const mongoose = require('mongoose');


//db
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

const app = express();

//template engine(pug)
app.set('view engine', 'pug')
app.set('views', './views');

// body perser
app.use(bodyParser.urlencoded({extended: true}))
app.use(expressSession);

// passport configs
app.use(passport.initialize());
app.use(passport.session());

//passport local authentication
passport.use(Register.createStrategy());
passport.serializeUser(Register.serializeUser());
passport.deserializeUser(Register.deserializeUser());

// display the page
app.use('/register', registrationRoutes);
app.use('/admin', adminRoutes);
app.use('/login', loginRoutes);
app.use('/product', productRoutes);
app.use('/home', homeRoutes); 





app.use(express.static('public'));


  app.put('/user', (req, res)=> {
    res.send('Got a PUT request at /user')
  })
// path params
  app.get('/users/:name', (req, res)=> {
    res.send('My name is' + req.params.name)
  })
  
  
  app.get('*', function(req, res) { 
       res.send('error, page does not exist');
    });

  
  app.post('/quotes', (req, res) => {
    console.log(req.body) 
   })




  //listening for request

app.listen(4000, () => console.log('listening on port 4000'));