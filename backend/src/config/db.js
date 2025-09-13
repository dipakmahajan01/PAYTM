const mongoose = require("mongoose")



const dbConnect = async() =>{
    try {
        await mongoose.connect('mongodb://localhost:27017/paytm')
        console.log("db connect successfully")
    } catch (error) {
        console.log("db connection failed")
    }
}

module.exports = {
    dbConnect
}