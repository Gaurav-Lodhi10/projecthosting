const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const bodyParser = require('body-parser');
const layouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.set('layout extractStyles', true);
app.set('layout extractScript', true);
app.use(layouts);
app.use('/', require('./routes'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const manual = require('./models/users');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('assets'));
let data = [];











app.listen(port, (err) => {
    if (err) {
        console.log(`Server is running on port ${port}: ${err}`);
    }
    console.log(`Server is running on port : ${port}`);

})