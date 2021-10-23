const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    username : {type: String, required: true},
    password : {type: String, required: true},
    active: {type:Boolean, required: true, default:false},
    activationCode: {type:Number, required: false}
});

const model = mongoose.model('Account', accountSchema);
module.exports = model;