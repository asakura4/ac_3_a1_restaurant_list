const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const User = require('../user')
const Restaurant = require('../restaurant')

const db = require('../../config/mongoose')

const restaurants = require('../sampleData/restaurantData').results
const seedUsers = [
  {
    email: 'user1@example.com',
    password: '12345678',
    restaurantId: [1, 2, 3]
  },
  {
    email: 'user2@example.com',
    password: '12345678',
    restaurantId: [4, 5, 6]
  }
]

db.once('open', () => {
  console.log('Seeder start!')
  Promise.all(
    seedUsers.map(seedUser => {
      return bcrypt
        .genSalt(10)
        .then(salt => bcrypt.hash(seedUser.password, salt))
        .then(hash => {
          return User.create({
            email: seedUser.email,
            password: hash
          })
        })
        .then(user => {
          console.log('before restaurant list')
          const userId = user._id
          const restaurantList = restaurants.filter(restaurant => {
            return seedUser.restaurantId.includes(restaurant.id)
          })
          return Promise.all(restaurantList.map(restaurant => {
            return Restaurant.create({
              name: restaurant.name,
              name_en: restaurant.name_en,
              category: restaurant.category,
              image: restaurant.image,
              location: restaurant.location,
              phone: restaurant.phone,
              google_map: restaurant.google_map,
              rating: restaurant.rating,
              description: restaurant.description,
              userId: userId
            })
          }))
        })
    })

  ).then(() => {
    console.log('Seeder end.')
    process.exit()
  })
    .catch((err) => console.log(err))
})
