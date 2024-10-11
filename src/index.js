const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const Database = require('./db/database');
const { engine } = require('express-handlebars');
const route = require('./routes');
Database.connect();
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8683;

app.use(bodyParser.urlencoded({ extended: true }));

app.engine('handlebars', engine()); // Initialize express-handlebars engine
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));

// app.get('/', (req, res) => {
//   res.render('show');
// });

// Website routes
route(app);
app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
});
