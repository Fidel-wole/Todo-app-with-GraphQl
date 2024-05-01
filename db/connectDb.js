import { MongoDB_URI } from "../env";
import mongoose from "mongoose"
const MONGODB_URI = process.env.MongoDB_URI;
const connectDb = async ()=>{
    if(mongoose.connection.readyState === 0){
        await mongoose.connect(MONGODB_URI)
    }
}

export {connectDb as default}