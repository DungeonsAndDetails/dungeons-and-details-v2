let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

// Express Route
let characterRoute = require('./routes/characters.route');
let attributeRoute = require('./routes/attribute.route');
let profileRoute = require('./routes/profile.route');
let skillsRoute = require('./routes/skills.route');
let itemsRoute = require('./routes/items.route');
let spellsRoute = require('./routes/spells.route');
let classesRoute = require('./routes/classes.route');
let subclassesRoute = require('./routes/subclasses.route');
let featRoute = require('./routes/feats.route');
let diceRoute = require('./routes/dice.route');
let modifiersRoute = require('./routes/modifiers.route');
let racesRoute = require('./routes/races.route');
let subracesRoute = require('./routes/subraces.route');
let monstersRoute = require('./routes/monsters.route');
let npcsRoute = require('./routes/npcs.route');
let backgroundsRoute = require('./routes/backgrounds.route');
let chatRoute = require('./routes/chat.route');

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
// Route for each collection
app.use('/characters', characterRoute);
app.use('/attributes', attributeRoute);
app.use('/profiles', profileRoute);
app.use('/skills', skillsRoute);
app.use('/items', itemsRoute);
app.use('/spells', spellsRoute);
app.use('/classes', classesRoute);
app.use('/subclasses', subclassesRoute);
app.use('/feats', featRoute);
app.use('/dice', diceRoute);
app.use('/modifiers', modifiersRoute);
app.use('/races', racesRoute);
app.use('/subraces', subracesRoute);
app.use('/monsters', monstersRoute);
app.use('/npcs', npcsRoute);
app.use('/backgrounds', backgroundsRoute);
app.use('/chat', chatRoute);

app.listen(4000, function () {
	console.log('listening on 4000');
});
