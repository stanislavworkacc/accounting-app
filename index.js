const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const exphbs = require('express-handlebars');
const jsonParser = express.json();
const addRouter = require('./routes/add');
const categoryRouter = require('./routes/category');
const homePageRouter = require('./routes/homepage');
const statisticRouter = require('./routes/statistic');

const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.use('/', homePageRouter);
app.use('/category', categoryRouter);
app.use('/add', addRouter);
app.use('/statistic', statisticRouter)

app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
  });

const PORT = process.env.PORT || 3200;

app.listen(PORT, () => {
    console.log(`Server was running on the port ${PORT}`)
})

module.exports = jsonParser;