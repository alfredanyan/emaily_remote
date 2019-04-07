const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose; //replaces the above
//our model class which would be used to create 
//instances of users in the future
const userSchema = new Schema({
    googleId: String
    //name: String
})

//creating a collection (table) called users
mongoose.model('users', userSchema);
