const Restaurant = require('../restaurant');
const db = require('../../config/mongoose');

const { restaurants } = require('../sampleData/data');
const res = require('express/lib/response');

db.once('open', () =>{

    restaurants["results"].map(rest => {
        console.log(rest);
        Restaurant.create({
            name: rest.name,
            name_en: rest.name_en,
            category: rest.category,
            image: rest.image,
            location: rest.location,
            phone: rest.phone,
            google_map: rest.google_map,
            rating: rest.rating,
            description: rest.description
        })
    });
    
    console.log('done');
   
});