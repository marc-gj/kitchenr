const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//Connect to the database
mongoose.connect(config.database, {
	useMongoClient: true
});

mongoose.connection.on('connected', () => {
	console.log('Connected to database ' + config.database);
});

mongoose.connection.on('error', (err) => {
	console.log('Database error: ' + err);
});

mongoose.Promise = require('bluebird');

const app = express();

const users = require('./routes/users');

const stocks = require('./routes/stocks');

const recipes = require('./routes/recipes');

const suppliers = require('./routes/suppliers');

const salesReps = require('./routes/salesreps');

//Set the port for the backend server
const port = process.env.PORT || 3000;

//Allows requests from all domains
app.use(cors());

//Set static build folder
app.use(express.static(path.join(__dirname, 'public')));

//Used for extracting jwt
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

app.use('/stocks', stocks);

app.use('/recipes', recipes);

app.use('/suppliers', suppliers);

app.use('/salesreps', salesReps);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
	console.log('Server Started on port ' + port);
});