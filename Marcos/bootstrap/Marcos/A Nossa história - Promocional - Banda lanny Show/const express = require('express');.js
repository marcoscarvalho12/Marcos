 const express = require('express');
 const app = express();
exports.app = app;
 const port = 3000
const exphbs = require('express-handlebars')
 

app.engine('handle', exphbs.engine())
app.set ('view engine','handlebars')

