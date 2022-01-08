const express = require('express');
const router = express.Router();

const Restaurant = require('../../models/restaurant');


router.post('/', (req, res) => {
    const {name, name_en, category, image, 
        address, phone, rating, description
    } = req.body; 
 
    return Restaurant.create({name, name_en, category, image, 
        address, phone, rating, description
    }).then(() => res.redirect('/'))
    .catch(error => console.log(error));

})

router.get('/new', (req, res) => {
    return res.render('new');
});


router.get('/search', (req, res) => {
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

router.get('/:id', (req, res) => {
    const id = req.params.id;
    return Restaurant.findById(id)
        .lean()
        .then(restaurant => res.render('show', { restaurant }))
        .catch(error => console.log(error));
})

router.get('/:id/edit', (req, res) => {
    const id = req.params.id;
    return Restaurant.findById(id)
        .lean()
        .then(restaurant => res.render('edit', { restaurant }))
        .catch(error => console.log(error));
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const {name, name_en, category, image, 
        address, phone, rating, description
    } = req.body; 
    
    return Restaurant.findById(id)
      .then(restaurant => {
        restaurant.name = name;
        restaurant.name_en = name_en;
        restaurant.category = category;
        restaurant.image = image;
        restaurant.address = address;
        restaurant.phone = phone;
        restaurant.rating = rating;
        restaurant.description = description;
        return restaurant.save()
      })
      .then(() => res.redirect(`/restaurants/${id}`))
      .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    return Restaurant.findById(id)
        .then(restaurant => restaurant.remove())
        .then(() => res.redirect('/'))
        .catch(error => console.log(error));
})

module.exports = router