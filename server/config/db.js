const mongoose =require('mongoose')
const connectDB = async()=>{


    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log ('MongoDB Connected Sucessfully');
    } catch (error) {

        console.error('Connection Error:', error.message);

        process.exit(1);

    }
};
module.exports=connectDB;