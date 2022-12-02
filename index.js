//Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')


//Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true})) //module for data encryption
app.use(methodOverride('_method')) //to override post method in form

//Controllers and Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

//adding a wildcard route 
app.get('*', (req, res) => {
    res.render('error404.jsx')
})

//Listen for connections
app.listen(process.env.PORT)



