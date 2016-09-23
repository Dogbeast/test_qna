var express = require('express');
	app = express();
	mongoose = require('mongoose');
	bodyParser = require('body-parser');
	session = require('express-session');
	path = require('path');
	bcrypt = require('bcryptjs');

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, './../bower_components')));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(session({
  secret:'somesecrettokenhere',
  resave: false,
  saveUninitialized: true,
  maxAge: 600000
}));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function(){
	console.log('listening on port 8000')
})