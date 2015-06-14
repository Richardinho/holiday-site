var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    author: String,
    published: String,
    title : String,
    text: String
});

mongoose.model('Article', UserSchema);