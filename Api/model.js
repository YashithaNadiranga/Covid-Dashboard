const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Business = new Schema({
    person_name: {
        type : String
    },
    business_name: {
        type : String
    },
    nic:{
        type : String
    }
},{
    collation: 'business'
});

module.exports = mongoose.model('Business',Business);
