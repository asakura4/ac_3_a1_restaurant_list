const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const path = require('path')

const Restaurant = require('./models/restaurant')

const route = require('./routes')
const app = express()

require('./config/mongoose')
const PORT = 3000

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// CSS file setting
app.use(express.static(path.join(__dirname, 'public')))
app.use(route)

app.listen(process.env.PORT || PORT, () => {
  console.log(`App is running on localhost:${PORT}`)
})
