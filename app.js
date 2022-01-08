const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const path = require('path')
require('./config/mongoose')


const routes = require('./routes')
const app = express()

const PORT = 3000

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// CSS file setting
app.use(express.static(path.join(__dirname, '/public')))
app.use(routes)

app.listen(process.env.PORT || PORT, () => {
  console.log(`App is running on localhost:${PORT}`)
})
