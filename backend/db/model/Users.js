const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {
      type : String , 
      required : true
    },
    email : {
        type : String , 
        required : true
    },
    password : {
        type : String,
        required : true
    },
    profile : {
        type : String,
        required : true
    },
    data : [
        {   
            _id : {type : String , require : true},
            semester : {type : String , required : true} ,
            subject : {type : String , required : true}  ,
            className : {type : String , required : true} , 
            date :{type : String , required : true} ,
            absentNum : {type : Array} ,
            presentNum :{type : Array },
            time : {type : String , required: true}
         }
    ]
})

module.exports = mongoose.model('users' , UserSchema);