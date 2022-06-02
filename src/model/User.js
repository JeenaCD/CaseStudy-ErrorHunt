const mongoose = require('mongoose');   // Part #2 Point 10
const { stringify } = require('nodemon/lib/utils');
mongoose.connect('mongodb://localhost:27017/Library',{useNewUrlParser: true,useUnifiedTopology: true});
const userSchema = new mongoose.Schema({
    id: Number,
    uid: String,
    pwd:String
})

module.exports = mongoose.model('User',userSchema);