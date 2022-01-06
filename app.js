const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const Restaurant = require('./models/restaurant');

const app = express();

require('./config/mongoose');
const PORT = 3000;

const { restaurants } = require('./models/sampleData/data');

app.engine('hbs',  exphbs.engine({ defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

// CSS file setting 
app.use(express.static(path.join(__dirname, 'public')));


app.get('/restaurants', (req, res) => {
    //console.log(restaurants);
    res.render('index', { restaurants });
})

app.get('/restaurants/:id', (req, res) => {
    //console.log(restaurants);
    const id = req.params.id;
    let restaurant = restaurants.filter(rest => rest.id == id)[0];
    console.log(restaurant);
    res.render('show', { restaurant });
})


app.listen(PORT, () => {
    console.log(`App is running on localhost:${PORT}`);
})