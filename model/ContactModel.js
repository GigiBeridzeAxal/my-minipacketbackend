const mongoose = require('mongoose')



const ContactSchema = mongoose.Schema({

    name:{
        required:true,
        type:String
    },
    surname:{
        required:true,
        type:String
    },
    phone:{
        required:true,
        type:Number
    },
    bussinesname:{
        required:true,
        type:String
    },
    desc:{
        required:true,
        type:String
    },

})

module.exports = mongoose.model('Contact' , ContactSchema)