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


app.get('/', (req, res) => {
    //console.log(restaurants);
    Restaurant.find()
        .lean()
        .sort({_id: 'asc'})
        .then(restaurants => res.render('index', {restaurants}))
        .catch(error => console.error(error));
})

app.get('/restaurants/search', (req, res) => {
    const keyword = req.query.keyword;
    console.log(keyword);
    
    Restaurant.find({
        $or: [
            {name : {$regex: keyword, $options: 'i'}},
            {category: {$regex: keyword, $options: 'i'}}
        ]})
        .lean()
        .sort({_id: 'asc'})
        .then(restaurants => res.render('index', {restaurants}))
        .catch(error => console.error(error));
})

app.get('/restaurants/:id', (req, res) => {
    const id = req.params.id;
    return Restaurant.findById(id)
        .lean()
        .then(restaurant => res.render('show', { restaurant }))
        .catch(error => console.log(error));
})





app.listen(PORT, () => {
    console.log(`App is running on localhost:${PORT}`);
})