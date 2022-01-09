const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb connected')
  console.log(`Our Current Database Name : ${db.databaseName}`)
})

module.exports = db
