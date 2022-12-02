const mongoose = require('mongoose')

//connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports.Place = require('./places')