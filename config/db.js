import mongoose from "mongoose"
const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB connected")
    }catch(error){
        console.log("Database error: " , error)
    }
}


// mongoose.connect(process.env.MONGODB_URL)    this is also method of db connnection but preferred with async await


export default connectDb