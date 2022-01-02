const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://gana:gana@fsd.m5nes.mongodb.net/libraryapp?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;