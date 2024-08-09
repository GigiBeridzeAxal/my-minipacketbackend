const mongoose = require('mongoose')



const ConnectDB = async() => {

    const connect = await mongoose.connect(process.env.DB)
    if(connect){
        console.log("Server Succesfuly Connected Database")
    }else{
        console.log("Something Went Wrong Please Try Again Later")
    }

}


module.exports = ConnectDB