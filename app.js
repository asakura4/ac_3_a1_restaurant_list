const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
if(process.env.NODE_ENV !== 'prod'){
  require('dotenv').config();
}

const path = require('path')
const usePassport = require('./config/passport');
require('./config/mongoose')


const routes = require('./routes')
const app = express()

const PORT = 3000

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// CSS file setting
app.use(express.static(path.join(__dirname, '/public')))
app.use(routes)
usePassport(app)

app.listen(process.env.PORT || PORT, () => {
  console.log(`App is running on localhost:${PORT}`)
})
