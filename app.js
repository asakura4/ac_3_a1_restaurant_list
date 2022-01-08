const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const path = require('path');

const Restaurant = require('./models/restaurant');

const app = express();

require('./config/mongoose');
const PORT = 3000;

app.engine('hbs',  exphbs.engine({ defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

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

app.post('/restaurants', (req, res) => {
    const {name, name_en, category, image, 
        address, phone, rating, description
    } = req.body; 
    console.log({name, name_en, category, image, 
        address, phone, rating, description
    })
   

    return Restaurant.create({name, name_en, category, image, 
        address, phone, rating, description
    }).then(() => res.redirect('/'))
    .catch(error => console.log(error));

})

app.get('/restaurants/new', (req, res) => {
    return res.render('new');
});


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

// app.get('/restaurants/:id/edit', (req, res) => {
//     const id = req.params.id;
//     return Restaurant.findById(id)
//         .lean()
//         .then(restaurant => res.render('edit', { restaurant }))
//         .catch(error => console.log(error));
// })

// app.put('/restaurants/:id', (req, res) => {
//     const id = req.params.id
//     const { name, isDone } = req.body
  
//     return Restaurant.findById(id)
//       .then(restaurant => {
//         return restaurant.save()
//       })
//       .then(() => res.redirect(`/restaurant/${id}`))
//       .catch(error => console.log(error))
// })

app.delete('/restaurants/:id', (req, res) => {
    const id = req.params.id;
    return Restaurant.findById(id)
        .then(restaurant => restaurant.remove())
        .then(() => res.redirect('/'))
        .catch(error => console.log(error));
})





app.listen(PORT, () => {
    console.log(`App is running on localhost:${PORT}`);
})