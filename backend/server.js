let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

// Express Route
let characterRoute = require('./routes/character.route');

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
	// Removes DeprecationWarning
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const app = express();
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	}),
);
app.use(cors());
app.use('/characters', characterRoute);

app.listen(4000, function () {
	console.log('listening on 4000');
});
